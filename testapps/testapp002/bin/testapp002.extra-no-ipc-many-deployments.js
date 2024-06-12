const cli = require('aws-cdk').cli;
const app = require('./testapp002');
const fs = require('fs/promises');

const main = async () => {
    for (let i = 0; i < 10; i++) {
        await fs.readFile(__filename);
        await cli(process.argv.slice(2), app);
    }
}

void main();
