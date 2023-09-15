# testapp001

## npm run hotswap-extra-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.146&pm;0.004s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.028&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.084&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.117&pm;0.004s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.153&pm;0.004s |
| ✨  Testapp001 all import | 0.301&pm;0.007s |
| ✨  Testapp001Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Stage.synth() | 0.038&pm;0.002s |
| ✨  Testapp001 total processing time | 0.355&pm;0.008s |
| ✨  Testapp001 processing time no imports | 0.054&pm;0.002s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.461&pm;0.099s |
| ✨  Synthesis time | 4.473&pm;0.099s |
| ✨  Deployment time | 0.668&pm;0.091s |
| ✨  Total time | 5.140&pm;0.134s |
| real | 69.657&pm;1.284s |
| user | 82.040&pm;0.907s |
| sys | 8.884&pm;0.244s |
