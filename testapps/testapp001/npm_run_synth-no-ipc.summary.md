# testapp001

## npm run synth-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.134&pm;0.004s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.028&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.083&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.117&pm;0.004s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.151&pm;0.004s |
| ✨  Testapp001 all import | 0.286&pm;0.006s |
| ✨  Testapp001Stack ctor minus super() | 0.035&pm;0.002s |
| ✨  Stage.synth() | 0.031&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.032&pm;0.001s |
| ✨  Testapp001 total processing time | 0.428&pm;0.008s |
| ✨  Testapp001 processing time no imports | 0.143&pm;0.005s |
| real | 6.713&pm;0.098s |
| user | 9.587&pm;0.123s |
| sys | 1.138&pm;0.027s |
