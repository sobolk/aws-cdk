# testapp001

## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.148&pm;0.014s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.030&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.086&pm;0.009s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.006&pm;0.002s |
| ✨  Testapp001Stack all import | 0.122&pm;0.012s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.158&pm;0.014s |
| ✨  Testapp001 all import | 0.307&pm;0.026s |
| ✨  Testapp001Stack ctor minus super() | 0.015&pm;0.002s |
| ✨  Stage.synth() | 0.037&pm;0.003s |
| ✨  Testapp001 total processing time | 0.362&pm;0.028s |
| ✨  Testapp001 processing time no imports | 0.055&pm;0.004s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.449&pm;0.108s |
| real | 5.088&pm;0.172s |
| user | 7.453&pm;0.080s |
| sys | 0.817&pm;0.018s |
