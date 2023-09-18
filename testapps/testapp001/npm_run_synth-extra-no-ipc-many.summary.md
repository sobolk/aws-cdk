# testapp001

## npm run synth-extra-no-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.138&pm;0.015s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.031&pm;0.007s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.094&pm;0.021s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.006&pm;0.004s |
| ✨  Testapp001Stack all import | 0.132&pm;0.032s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.166&pm;0.035s |
| ✨  Testapp001 all import | 0.305&pm;0.045s |
| ✨  Testapp001Stack ctor minus super() | 0.039&pm;0.012s |
| ✨  Stage.synth() | 0.011&pm;0.007s |
| ✨  CDK_APP_HACK.synth() | 0.011&pm;0.007s |
| ✨  Testapp001 total processing time | 0.620&pm;0.085s |
| ✨  Testapp001 processing time no imports | 0.314&pm;0.042s |
| real | 6.909&pm;0.427s |
| user | 9.785&pm;0.251s |
| sys | 1.152&pm;0.079s |
