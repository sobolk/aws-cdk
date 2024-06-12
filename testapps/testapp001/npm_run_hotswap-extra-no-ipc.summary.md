# testapp001

## npm run hotswap-extra-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.138&pm;0.005s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.029&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.084&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.000s |
| ✨  Testapp001Stack all import | 0.118&pm;0.003s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.150&pm;0.004s |
| ✨  Testapp001 all import | 0.288&pm;0.006s |
| ✨  Testapp001Stack ctor minus super() | 0.031&pm;0.002s |
| ✨  Stage.synth() | 0.031&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.031&pm;0.001s |
| ✨  Synthesis time | 0.041&pm;0.003s |
| ✨  Deployment time | 0.624&pm;0.019s |
| ✨  Total time | 0.664&pm;0.019s |
| ✨  Testapp001 total processing time | 2.295&pm;0.124s |
| ✨  Testapp001 processing time no imports | 2.007&pm;0.122s |
| real | 8.536&pm;0.157s |
| user | 10.332&pm;0.147s |
| sys | 1.194&pm;0.034s |
