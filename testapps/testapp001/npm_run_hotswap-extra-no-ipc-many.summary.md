# testapp001

## npm run hotswap-extra-no-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.138&pm;0.005s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.030&pm;0.004s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.085&pm;0.003s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.120&pm;0.007s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.155&pm;0.007s |
| ✨  Testapp001 all import | 0.294&pm;0.011s |
| ✨  Testapp001Stack ctor minus super() | 0.035&pm;0.002s |
| ✨  Stage.synth() | 0.003&pm;0.010s |
| ✨  CDK_APP_HACK.synth() | 0.003&pm;0.010s |
| ✨  Synthesis time | 0.006&pm;0.013s |
| ✨  Deployment time | 0.670&pm;0.066s |
| ✨  Total time | 0.678&pm;0.068s |
| ✨  Testapp001 total processing time | 21.094&pm;5.825s |
| ✨  Testapp001 processing time no imports | 20.800&pm;5.823s |
| real | 27.477&pm;5.882s |
| user | 19.466&pm;0.412s |
| sys | 2.103&pm;0.115s |
