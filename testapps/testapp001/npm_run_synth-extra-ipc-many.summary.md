# testapp001

## npm run synth-extra-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.146&pm;0.007s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.028&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.084&pm;0.004s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.117&pm;0.006s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.154&pm;0.007s |
| ✨  Testapp001 all import | 0.301&pm;0.012s |
| ✨  Testapp001Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Stage.synth() | 0.037&pm;0.002s |
| ✨  Testapp001 total processing time | 0.355&pm;0.013s |
| ✨  Testapp001 processing time no imports | 0.054&pm;0.003s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.428&pm;0.092s |
| real | 49.102&pm;0.618s |
| user | 74.141&pm;0.666s |
| sys | 8.064&pm;0.295s |
