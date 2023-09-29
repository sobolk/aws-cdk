# testapp001


## npm run synth-extra-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.135&pm;0.004s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.029&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.083&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp001Stack all import | 0.117&pm;0.004s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.149&pm;0.005s |
| ✨  Testapp001 all import | 0.284&pm;0.007s |
| ✨  Testapp001Stack ctor minus super() | 0.033&pm;0.002s |
| ✨  Stage.synth() | 0.033&pm;0.002s |
| ✨  CDK_APP_HACK.synth() | 0.033&pm;0.002s |
| ✨  Testapp001 total processing time | 0.425&pm;0.012s |
| ✨  Testapp001 processing time no imports | 0.141&pm;0.005s |
| real | 6.623&pm;0.123s |
| user | 9.513&pm;0.128s |
| sys | 1.127&pm;0.045s |


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


## npm run hotswap-extra-no-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.172&pm;0.006s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.035&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.105&pm;0.010s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.007&pm;0.001s |
| ✨  Testapp001Stack all import | 0.148&pm;0.012s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.181&pm;0.013s |
| ✨  Testapp001 all import | 0.354&pm;0.017s |
| ✨  Testapp001Stack ctor minus super() | 0.037&pm;0.001s |
| ✨  Stage.synth() | 0.020&pm;0.006s |
| ✨  CDK_APP_HACK.synth() | 0.020&pm;0.006s |
| ✨  Synthesis time | 0.029&pm;0.009s |
| ✨  Deployment time | 2.316&pm;0.177s |
| ✨  Total time | 2.345&pm;0.177s |
| ✨  Testapp001 total processing time | 33.160&pm;1.191s |
| ✨  Testapp001 processing time no imports | 32.806&pm;1.183s |
| real | 39.950&pm;1.143s |
| user | 21.155&pm;0.840s |
| sys | 2.218&pm;0.078s |


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


## npm run hotswap-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.138&pm;0.004s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.001s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.030&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.085&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.000s |
| ✨  Testapp001Stack all import | 0.121&pm;0.004s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.155&pm;0.006s |
| ✨  Testapp001 all import | 0.294&pm;0.008s |
| ✨  Testapp001Stack ctor minus super() | 0.031&pm;0.003s |
| ✨  Stage.synth() | 0.032&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.032&pm;0.001s |
| ✨  Synthesis time | 0.043&pm;0.005s |
| ✨  Deployment time | 0.626&pm;0.023s |
| ✨  Total time | 0.669&pm;0.023s |
| ✨  Testapp001 total processing time | 2.251&pm;0.123s |
| ✨  Testapp001 processing time no imports | 1.956&pm;0.128s |
| real | 8.560&pm;0.101s |
| user | 10.352&pm;0.094s |
| sys | 1.254&pm;0.050s |


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


## npm run hotswap-extra-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.138&pm;0.005s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.029&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.084&pm;0.002s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.000s |
| ✨  Testapp001Stack all import | 0.118&pm;0.003s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.150&pm;0.004s |
| ✨  Testapp001 all import | 0.288&pm;0.006s |
| ✨  Testapp001Stack ctor minus super() | 0.031&pm;0.002s |
| ✨  Stage.synth() | 0.031&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.031&pm;0.001s |
| ✨  Synthesis time | 0.041&pm;0.003s |
| ✨  Deployment time | 0.624&pm;0.019s |
| ✨  Total time | 0.664&pm;0.019s |
| ✨  Testapp001 total processing time | 2.295&pm;0.124s |
| ✨  Testapp001 processing time no imports | 2.007&pm;0.122s |
| real | 8.536&pm;0.157s |
| user | 10.332&pm;0.147s |
| sys | 1.194&pm;0.034s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.148&pm;0.014s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.030&pm;0.003s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.086&pm;0.009s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.006&pm;0.002s |
| ✨  Testapp001Stack all import | 0.122&pm;0.012s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.158&pm;0.014s |
| ✨  Testapp001 all import | 0.307&pm;0.026s |
| ✨  Testapp001Stack ctor minus super() | 0.015&pm;0.002s |
| ✨  Stage.synth() | 0.037&pm;0.003s |
| ✨  Testapp001 total processing time | 0.362&pm;0.028s |
| ✨  Testapp001 processing time no imports | 0.055&pm;0.004s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.449&pm;0.108s |
| real | 5.088&pm;0.172s |
| user | 7.453&pm;0.080s |
| sys | 0.817&pm;0.018s |


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


## npm run hotswap-extra-ipc-many-transpile-only


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp001 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp001 import * as cdk from 'aws-cdk-lib' | 0.143&pm;0.007s |
| ✨  Testapp001Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp001Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.027&pm;0.002s |
| ✨  Testapp001Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.080&pm;0.004s |
| ✨  Testapp001Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp001Stack all import | 0.112&pm;0.006s |
| ✨  Testapp001 import { Testapp001Stack } from '../lib/testapp001-stack' | 0.132&pm;0.009s |
| ✨  Testapp001 all import | 0.276&pm;0.015s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.034&pm;0.002s |
| ✨  Testapp001 total processing time | 0.326&pm;0.016s |
| ✨  Testapp001 processing time no imports | 0.050&pm;0.002s |
| ✨  execProgram npx ts-node bin/testapp001.ts | 4.345&pm;0.057s |
| ✨  Synthesis time | 1.148&pm;1.075s |
| ✨  Deployment time | 0.233&pm;0.035s |
| ✨  Total time | 1.380&pm;1.079s |
| ✨  execProgram npx ts-node --transpileOnly bin/testapp001.ts | 0.780&pm;0.021s |
| real | 30.865&pm;0.614s |
| user | 23.913&pm;0.338s |
| sys | 3.393&pm;0.084s |


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

