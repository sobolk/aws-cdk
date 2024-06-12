const requireStartTime = new Date().getTime();
const { Stack } = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const lambda = require('aws-cdk-lib/aws-lambda');
const s3deploy = require('aws-cdk-lib/aws-s3-deployment');
const requireElapsedTime = new Date().getTime() - requireStartTime;
console.log('\n✨  Testapp008Stack all require(): %ss\n', requireElapsedTime/1000);

class Testapp008Stack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const startTime = new Date().getTime();
    const bucket = new s3.Bucket(this, 'test-bucket');

    new s3deploy.BucketDeployment(this, 'DeployFiles', {
      sources: [s3deploy.Source.asset('./some_files')],
      destinationBucket: bucket,
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
    });

    const elapsedTime = new Date().getTime() - startTime;
    console.log('\n✨  Testapp008Stack ctor minus super(): %ss\n', elapsedTime/1000);
  }
}

module.exports = { Testapp008Stack: Testapp008Stack }
