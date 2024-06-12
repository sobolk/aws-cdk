import * as childProcess from 'child_process';
import * as fs from 'fs/promises';

async function exec(command: string, args: string[]) {
    return new Promise<void>((ok, fail) => {
        // We use a slightly lower-level interface to:
        //
        // - Pass arguments in an array instead of a string, to get around a
        //   number of quoting issues introduced by the intermediate shell layer
        //   (which would be different between Linux and Windows).
        //
        // - Inherit stderr from controlling terminal. We don't use the captured value
        //   anyway, and if the subprocess is printing to it for debugging purposes the
        //   user gets to see it sooner. Plus, capturing doesn't interact nicely with some
        //   processes like Maven.
        const proc = childProcess.spawn(command, args, {
            stdio: ['ignore', 'inherit', 'inherit'],
            detached: false,
            shell: true,
        });

        proc.on('error', fail);

        proc.on('exit', code => {
            if (code === 0) {
                return ok();
            } else {
                return fail(new Error(`Subprocess exited with error ${code}`));
            }
        });
    });
}

const main = async () => {
    for (let i = 0; i < 10; i++) {
        await fs.readFile(__filename);
        await exec('cdk', process.argv.slice(2));
    }
}

void main();
