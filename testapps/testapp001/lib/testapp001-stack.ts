const importStartTime = new Date().getTime();
let singleImportStartTime = new Date().getTime();
import * as cdk from 'aws-cdk-lib';
let singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp001Stack import * as cdk from \'aws-cdk-lib\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import { Construct } from 'constructs';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp001Stack import { Construct } from \'constructs\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import * as s3 from 'aws-cdk-lib/aws-s3';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp001Stack import * as s3 from \'aws-cdk-lib/aws-s3\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import * as lambda from 'aws-cdk-lib/aws-lambda'
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp001Stack import * as lambda from \'aws-cdk-lib/aws-lambda\': %ss\n', singleImportElapsedTime/1000);
singleImportStartTime = new Date().getTime();
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
singleImportElapsedTime = new Date().getTime() - singleImportStartTime;
console.log('\n✨  Testapp001Stack import * as s3deploy from \'aws-cdk-lib/aws-s3-deployment\': %ss\n', singleImportElapsedTime/1000);
const importElapsedTime = new Date().getTime() - importStartTime;
console.log('\n✨  Testapp001Stack all import: %ss\n', importElapsedTime/1000);

export class Testapp001Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const startTime = new Date().getTime();
    const bucket = new s3.Bucket(this, 'test-bucket');

    new s3deploy.BucketDeployment(this, 'DeployFiles', {
      sources: [s3deploy.Source.asset('./some_files')],
      destinationBucket: bucket,
      memoryLimit: 7076,
    });

    new lambda.Function(this, 'lambda1', {
      code: lambda.Code.fromAsset('./lambda1'),
      handler: "index1.handler",
      runtime: lambda.Runtime.NODEJS_18_X
    });

    new lambda.Function(this, 'lambda2', {
      code: lambda.Code.fromAsset('./lambda2'),
      handler: "index2.handler",
      runtime: lambda.Runtime.NODEJS_18_X
    });

    new lambda.Function(this, 'lambda3', {
      code: lambda.Code.fromAsset('./lambda3'),
      handler: "index3.handler",
      runtime: lambda.Runtime.NODEJS_18_X
    }).role

    const elapsedTime = new Date().getTime() - startTime;
    console.log('\n✨  Testapp001Stack ctor minus super(): %ss\n', elapsedTime/1000);
  }
}
