# testapp001

## npm run synth-extra-no-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.146&pm;0.017s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.031&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.090&pm;0.009s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.127&pm;0.012s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.161&pm;0.013s |
| ✨  Testapp001 all import | 0.308&pm;0.030s |
| ✨  Testapp001Stack ctor minus super() | 0.031&pm;0.003s |
| ✨  Stage.synth() | 0.003&pm;0.010s |
| ✨  CDK_APP_HACK.synth() | 0.003&pm;0.010s |
| ✨  Testapp001 total processing time | 0.531&pm;0.041s |
| ✨  Testapp001 processing time no imports | 0.223&pm;0.012s |
| real | 7.019&pm;0.301s |
| user | 9.867&pm;0.203s |
| sys | 1.241&pm;0.057s |
