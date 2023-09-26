#!/usr/bin/env node
const globalStartTime = new Date().getTime();
const requireStartTime = new Date().getTime();
const cdk = require('aws-cdk-lib');
const { Testapp008Stack } = require('../lib/testapp008-stack');
const requireElapsedTime = new Date().getTime() - requireStartTime;
console.log('\n✨  Testapp008 all require(): %ss\n', requireElapsedTime/1000);

const startTimeNoImports = new Date().getTime();
process.on('exit', () => {
    const globalElapsedTime = new Date().getTime() - globalStartTime;
    const noImportsElapsedTime = new Date().getTime() - startTimeNoImports;
    console.log('\n✨  Testapp008 total processing time: %ss\n', globalElapsedTime/1000);
    console.log('\n✨  Testapp008 processing time no imports: %ss\n', noImportsElapsedTime/1000);
});

const app = new cdk.App();
new Testapp008Stack(app, 'Testapp008Stack', {
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
