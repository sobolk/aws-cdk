# testapp001

## npm run synth-extra-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.135&pm;0.004s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.029&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.083&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp001Stack all import | 0.117&pm;0.004s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.149&pm;0.005s |
| ✨  Testapp001 all import | 0.284&pm;0.007s |
| ✨  Testapp001Stack ctor minus super() | 0.033&pm;0.002s |
| ✨  Stage.synth() | 0.033&pm;0.002s |
| ✨  CDK_APP_HACK.synth() | 0.033&pm;0.002s |
| ✨  Testapp001 total processing time | 0.425&pm;0.012s |
| ✨  Testapp001 processing time no imports | 0.141&pm;0.005s |
| real | 6.623&pm;0.123s |
| user | 9.513&pm;0.128s |
| sys | 1.127&pm;0.045s |
