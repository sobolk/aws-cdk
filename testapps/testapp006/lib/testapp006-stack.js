const requireStartTime = new Date().getTime();
const { Stack } = require('../node_modules/aws-cdk-lib/core/lib/stack.js');
const Bucket = require('../node_modules/aws-cdk-lib/aws-s3/lib/bucket.js').Bucket;
const lambda = require('../node_modules/aws-cdk-lib/aws-lambda');
const BucketDeployment = require('../node_modules/aws-cdk-lib/aws-s3-deployment/lib/bucket-deployment.js').BucketDeployment;
const Source = require('../node_modules/aws-cdk-lib/aws-s3-deployment/lib/source.js').Source;
const requireElapsedTime = new Date().getTime() - requireStartTime;
console.log('\n✨  Testapp006Stack all require(): %ss\n', requireElapsedTime/1000);

class Testapp006Stack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const startTime = new Date().getTime();
    const bucket = new Bucket(this, 'test-bucket');

    new BucketDeployment(this, 'DeployFiles', {
      sources: [Source.asset('./some_files')],
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
    console.log('\n✨  Testapp006Stack ctor minus super(): %ss\n', elapsedTime/1000);
  }
}

module.exports = { Testapp006Stack: Testapp006Stack }
