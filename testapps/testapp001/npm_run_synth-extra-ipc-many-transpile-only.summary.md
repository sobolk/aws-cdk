# testapp001

## npm run synth-extra-ipc-many-transpile-only


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.144&pm;0.007s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.027&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.081&pm;0.004s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.114&pm;0.006s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.134&pm;0.011s |
| ✨  Testapp001 all import | 0.278&pm;0.016s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.035&pm;0.002s |
| ✨  Testapp001 total processing time | 0.329&pm;0.018s |
| ✨  Testapp001 processing time no imports | 0.050&pm;0.003s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.483&pm;0.148s |
| ✨  execProgram npx ts-node --transpileOnly bin/testapp001.ts | 0.784&pm;0.022s |
| real | 16.226&pm;0.269s |
| user | 19.220&pm;0.217s |
| sys | 2.833&pm;0.084s |
