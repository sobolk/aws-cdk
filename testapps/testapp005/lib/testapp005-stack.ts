const importStartTime = new Date().getTime();
let singleImportStartTime = new Date().getTime();
import { Stack, StackProps } from '@aws-cdk/core';
let singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import { Stack, StackProps } from \'@aws-cdk/core\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Construct } from 'constructs';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import { Construct } from \'constructs\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Bucket } from '@aws-cdk/aws-s3';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import { Bucket } from \'@aws-cdk/aws-s3\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Function, Code, Runtime} from '@aws-cdk/aws-lambda';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import * as lambda from \'@aws-cdk/aws-lambda\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { BucketDeployment } from '@aws-cdk/aws-s3-deployment';
import { Source } from '@aws-cdk/aws-s3-deployment';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import * as s3deploy from \'@aws-cdk/aws-s3-deployment\': %ss\n', singleImportElapsedTime/1000);
const importElapsedTime = new Date().getTime() - importStartTime;
console.log('\n✨  Testapp005Stack all import: %ss\n', importElapsedTime/1000);

export class Testapp005Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const startTime = new Date().getTime();
    const bucket = new Bucket(this, 'test-bucket');

    new BucketDeployment(this, 'DeployFiles', {
      sources: [Source.asset('./some_files')],
      destinationBucket: bucket,
    });

    new Function(this, 'lambda1', {
      code: Code.fromAsset('./lambda1'),
      handler: "index1.handler",
      runtime: Runtime.NODEJS_16_X
    });

    new Function(this, 'lambda2', {
      code: Code.fromAsset('./lambda2'),
      handler: "index2.handler",
      runtime: Runtime.NODEJS_16_X
    });

    new Function(this, 'lambda3', {
      code: Code.fromAsset('./lambda3'),
      handler: "index3.handler",
      runtime: Runtime.NODEJS_16_X
    }).role

    const elapsedTime = new Date().getTime() - startTime;
    console.log('\n✨  Testapp005Stack ctor minus super(): %ss\n', elapsedTime/1000);
  }
}
