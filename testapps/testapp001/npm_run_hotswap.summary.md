# testapp001

## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.143&pm;0.003s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.028&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.082&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.000s |
| ✨  Testapp001Stack all import | 0.115&pm;0.002s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.149&pm;0.002s |
| ✨  Testapp001 all import | 0.294&pm;0.003s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.036&pm;0.002s |
| ✨  Testapp001 total processing time | 0.346&pm;0.004s |
| ✨  Testapp001 processing time no imports | 0.052&pm;0.002s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.392&pm;0.050s |
| ✨  Synthesis time | 4.404&pm;0.051s |
| ✨  Deployment time | 0.614&pm;0.018s |
| ✨  Total time | 5.018&pm;0.054s |
| real | 6.849&pm;0.100s |
| user | 8.095&pm;0.056s |
| sys | 0.864&pm;0.010s |
