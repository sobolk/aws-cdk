const importStartTime = new Date().getTime();
let singleImportStartTime = new Date().getTime();
import { Stack, StackProps } from '../../../packages/aws-cdk-lib/core/lib/stack';
let singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import { Stack, StackProps } from \'../../../packages/aws-cdk-lib/core/lib/stack\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Construct } from 'constructs';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import { Construct } from \'constructs\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Bucket } from '../../../packages/aws-cdk-lib/aws-s3/lib/bucket';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import { Bucket } from \'../../../packages/aws-cdk-lib/aws-s3/lib/bucket\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Function, Code, Runtime} from '../../../packages/aws-cdk-lib/aws-lambda';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import * as lambda from \'../../../packages/aws-cdk-lib/aws-lambda/lib/\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { BucketDeployment } from '../../../packages/aws-cdk-lib/aws-s3-deployment/lib/bucket-deployment';
import { Source } from '../../../packages/aws-cdk-lib/aws-s3-deployment/lib/source';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp005Stack import * as s3deploy from \'../../../packages/aws-cdk-lib/aws-s3-deployment/lib\': %ss\n', singleImportElapsedTime/1000);
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
      runtime: Runtime.NODEJS_18_X
    });

    new Function(this, 'lambda2', {
      code: Code.fromAsset('./lambda2'),
      handler: "index2.handler",
      runtime: Runtime.NODEJS_18_X
    });

    new Function(this, 'lambda3', {
      code: Code.fromAsset('./lambda3'),
      handler: "index3.handler",
      runtime: Runtime.NODEJS_18_X
    }).role

    const elapsedTime = new Date().getTime() - startTime;
    console.log('\n✨  Testapp005Stack ctor minus super(): %ss\n', elapsedTime/1000);
  }
}
