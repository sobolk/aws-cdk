#!/usr/bin/env node
const globalStartTime = new Date().getTime();
const importStartTime = new Date().getTime();
let singleImportStartTime = new Date().getTime();
import 'source-map-support/register';
let singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp003 import \'source-map-support/register\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import * as cdk from 'aws-cdk-lib';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp003 import * as cdk from \'aws-cdk-lib\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Testapp003Stack } from '../lib/testapp003-stack';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp003 import { Testapp003Stack } from \'../lib/testapp003-stack\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
const importElapsedTime = new Date().getTime() - importStartTime;
console.log('\n✨  Testapp003 all import: %ss\n', importElapsedTime/1000);

const startTimeNoImports = new Date().getTime();
process.on('exit', () => {
    const globalElapsedTime = new Date().getTime() - globalStartTime;
    const noImportsElapsedTime = new Date().getTime() - startTimeNoImports;
    console.log('\n✨  Testapp003 total processing time: %ss\n', globalElapsedTime/1000);
    console.log('\n✨  Testapp003 processing time no imports: %ss\n', noImportsElapsedTime/1000);
});

const app = new cdk.App();
new Testapp003Stack(app, 'Testapp003Stack', {
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
