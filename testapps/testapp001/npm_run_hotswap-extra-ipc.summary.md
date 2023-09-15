# testapp001

## npm run hotswap-extra-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.143&pm;0.003s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.028&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.081&pm;0.001s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.000s |
| ✨  Testapp001Stack all import | 0.114&pm;0.003s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.148&pm;0.002s |
| ✨  Testapp001 all import | 0.292&pm;0.003s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.037&pm;0.003s |
| ✨  Testapp001 total processing time | 0.344&pm;0.004s |
| ✨  Testapp001 processing time no imports | 0.052&pm;0.003s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.397&pm;0.055s |
| ✨  Synthesis time | 4.409&pm;0.056s |
| ✨  Deployment time | 0.655&pm;0.102s |
| ✨  Total time | 5.063&pm;0.108s |
| real | 7.523&pm;0.111s |
| user | 9.475&pm;0.077s |
| sys | 0.941&pm;0.009s |
