# testapp001

## npm run hotswap-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.138&pm;0.004s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.001s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.030&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.085&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.000s |
| ✨  Testapp001Stack all import | 0.121&pm;0.004s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.155&pm;0.006s |
| ✨  Testapp001 all import | 0.294&pm;0.008s |
| ✨  Testapp001Stack ctor minus super() | 0.031&pm;0.003s |
| ✨  Stage.synth() | 0.032&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.032&pm;0.001s |
| ✨  Synthesis time | 0.043&pm;0.005s |
| ✨  Deployment time | 0.626&pm;0.023s |
| ✨  Total time | 0.669&pm;0.023s |
| ✨  Testapp001 total processing time | 2.251&pm;0.123s |
| ✨  Testapp001 processing time no imports | 1.956&pm;0.128s |
| real | 8.560&pm;0.101s |
| user | 10.352&pm;0.094s |
| sys | 1.254&pm;0.050s |
