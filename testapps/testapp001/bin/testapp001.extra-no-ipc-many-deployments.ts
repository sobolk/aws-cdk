import { cli } from 'aws-cdk';
import { app } from './testapp001';
import * as fs from 'fs/promises';

const main = async () => {
    for (let i = 0; i < 10; i++) {
        await fs.readFile(__filename);
        await cli(process.argv.slice(2), app);
    }
}

void main();
