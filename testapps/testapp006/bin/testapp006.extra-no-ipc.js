const cli = require('aws-cdk').cli;
const app = require('./testapp006');
const fs = require('fs/promises');

const main = async () => {
    await fs.readFile(__filename);
    cli(process.argv.slice(2), app);
}

void main();
