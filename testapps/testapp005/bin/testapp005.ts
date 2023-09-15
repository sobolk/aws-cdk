#!/usr/bin/env node
const globalStartTime = new Date().getTime();
const importStartTime = new Date().getTime();
let singleImportStartTime = new Date().getTime();
import 'source-map-support/register';
let singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005 import \'source-map-support/register\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { App } from '../../../packages/aws-cdk-lib/core/lib/app'
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005 import { App } from \'../../../packages/aws-cdk-lib/core/lib/app.ts\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Testapp005Stack } from '../lib/testapp005-stack';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005 import { Testapp005Stack } from \'../lib/testapp005-stack\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
const importElapsedTime = new Date().getTime() - importStartTime;
console.log('\n✨  Testapp005 all import: %ss\n', importElapsedTime/1000);

const startTimeNoImports = new Date().getTime();
process.on('exit', () => {
    const globalElapsedTime = new Date().getTime() - globalStartTime;
    const noImportsElapsedTime = new Date().getTime() - startTimeNoImports;
    console.log('\n✨  Testapp005 total processing time: %ss\n', globalElapsedTime/1000);
    console.log('\n✨  Testapp005 processing time no imports: %ss\n', noImportsElapsedTime/1000);
});

export const app = new App();
new Testapp005Stack(app, 'Testapp005Stack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
