# testapp001

## npm run synth-extra-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.139&pm;0.002s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.027&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.079&pm;0.000s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.111&pm;0.002s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.145&pm;0.002s |
| ✨  Testapp001 all import | 0.285&pm;0.002s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.035&pm;0.002s |
| ✨  Testapp001 total processing time | 0.335&pm;0.003s |
| ✨  Testapp001 processing time no imports | 0.050&pm;0.002s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.260&pm;0.019s |
| real | 5.454&pm;0.035s |
| user | 8.577&pm;0.081s |
| sys | 0.823&pm;0.015s |
