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

# testapp002


## npm run synth-extra-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.112&pm;0.003s |
| ✨  Testapp002 all require() | 0.242&pm;0.008s |
| ✨  Testapp002Stack ctor minus super() | 0.036&pm;0.002s |
| ✨  Stage.synth() | 0.032&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.032&pm;0.001s |
| ✨  Testapp002 total processing time | 0.378&pm;0.012s |
| ✨  Testapp002 processing time no imports | 0.136&pm;0.005s |
| real | 0.892&pm;0.026s |
| user | 0.903&pm;0.018s |
| sys | 0.168&pm;0.009s |


## npm run hotswap-extra-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.111&pm;0.006s |
| ✨  Testapp002 all require() | 0.256&pm;0.015s |
| ✨  Testapp002Stack ctor minus super() | 0.014&pm;0.003s |
| ✨  Stage.synth() | 0.035&pm;0.003s |
| ✨  Testapp002 total processing time | 0.307&pm;0.019s |
| ✨  Testapp002 processing time no imports | 0.051&pm;0.005s |
| ✨  execProgram node bin/testapp002.js | 0.365&pm;0.021s |
| ✨  Synthesis time | 0.376&pm;0.023s |
| ✨  Deployment time | 0.234&pm;0.058s |
| ✨  Total time | 0.609&pm;0.062s |
| real | 22.076&pm;0.694s |
| user | 12.519&pm;0.232s |
| sys | 1.893&pm;0.098s |


## npm run hotswap-extra-no-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.120&pm;0.015s |
| ✨  Testapp002 all require() | 0.268&pm;0.035s |
| ✨  Testapp002Stack ctor minus super() | 0.041&pm;0.005s |
| ✨  Stage.synth() | 0.017&pm;0.007s |
| ✨  CDK_APP_HACK.synth() | 0.017&pm;0.007s |
| ✨  Synthesis time | 0.025&pm;0.009s |
| ✨  Deployment time | 0.264&pm;0.041s |
| ✨  Total time | 0.289&pm;0.041s |
| ✨  Testapp002 total processing time | 11.784&pm;1.017s |
| ✨  Testapp002 processing time no imports | 11.515&pm;1.016s |
| real | 12.475&pm;1.025s |
| user | 4.060&pm;0.290s |
| sys | 0.619&pm;0.038s |


## npm run hotswap-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.114&pm;0.004s |
| ✨  Testapp002 all require() | 0.246&pm;0.007s |
| ✨  Testapp002Stack ctor minus super() | 0.040&pm;0.002s |
| ✨  Stage.synth() | 0.032&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.033&pm;0.001s |
| ✨  Synthesis time | 0.041&pm;0.003s |
| ✨  Deployment time | 0.224&pm;0.022s |
| ✨  Total time | 0.268&pm;0.023s |
| ✨  Testapp002 total processing time | 1.839&pm;0.167s |
| ✨  Testapp002 processing time no imports | 1.594&pm;0.165s |
| real | 2.375&pm;0.171s |
| user | 1.373&pm;0.033s |
| sys | 0.233&pm;0.008s |


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.112&pm;0.004s |
| ✨  Testapp002 all require() | 0.258&pm;0.010s |
| ✨  Testapp002Stack ctor minus super() | 0.014&pm;0.002s |
| ✨  Stage.synth() | 0.035&pm;0.002s |
| ✨  Testapp002 total processing time | 0.310&pm;0.013s |
| ✨  Testapp002 processing time no imports | 0.052&pm;0.004s |
| ✨  execProgram node bin/testapp002.js | 0.369&pm;0.013s |
| ✨  Synthesis time | 0.380&pm;0.012s |
| ✨  Deployment time | 0.230&pm;0.036s |
| ✨  Total time | 0.611&pm;0.037s |
| real | 2.483&pm;0.127s |
| user | 1.437&pm;0.031s |
| sys | 0.226&pm;0.008s |


## npm run synth-extra-no-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.116&pm;0.006s |
| ✨  Testapp002 all require() | 0.248&pm;0.012s |
| ✨  Testapp002Stack ctor minus super() | 0.036&pm;0.003s |
| ✨  Stage.synth() | 0.010&pm;0.007s |
| ✨  CDK_APP_HACK.synth() | 0.010&pm;0.007s |
| ✨  Testapp002 total processing time | 0.530&pm;0.021s |
| ✨  Testapp002 processing time no imports | 0.282&pm;0.012s |
| real | 1.063&pm;0.040s |
| user | 1.169&pm;0.023s |
| sys | 0.209&pm;0.013s |


## npm run synth-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.112&pm;0.003s |
| ✨  Testapp002 all require() | 0.240&pm;0.005s |
| ✨  Testapp002Stack ctor minus super() | 0.033&pm;0.004s |
| ✨  Stage.synth() | 0.031&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.031&pm;0.001s |
| ✨  Testapp002 total processing time | 0.372&pm;0.007s |
| ✨  Testapp002 processing time no imports | 0.132&pm;0.004s |
| real | 0.891&pm;0.031s |
| user | 0.906&pm;0.016s |
| sys | 0.166&pm;0.010s |


## npm run hotswap-extra-no-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.112&pm;0.002s |
| ✨  Testapp002 all require() | 0.243&pm;0.004s |
| ✨  Testapp002Stack ctor minus super() | 0.042&pm;0.004s |
| ✨  Stage.synth() | 0.032&pm;0.001s |
| ✨  CDK_APP_HACK.synth() | 0.033&pm;0.001s |
| ✨  Synthesis time | 0.040&pm;0.000s |
| ✨  Deployment time | 0.223&pm;0.016s |
| ✨  Total time | 0.265&pm;0.018s |
| ✨  Testapp002 total processing time | 1.802&pm;0.120s |
| ✨  Testapp002 processing time no imports | 1.559&pm;0.121s |
| real | 2.340&pm;0.112s |
| user | 1.375&pm;0.022s |
| sys | 0.235&pm;0.005s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.113&pm;0.003s |
| ✨  Testapp002 all require() | 0.260&pm;0.005s |
| ✨  Testapp002Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.035&pm;0.001s |
| ✨  Testapp002 total processing time | 0.311&pm;0.006s |
| ✨  Testapp002 processing time no imports | 0.051&pm;0.001s |
| ✨  execProgram node bin/testapp002.js | 0.371&pm;0.010s |
| real | 0.968&pm;0.013s |
| user | 0.955&pm;0.007s |
| sys | 0.176&pm;0.005s |


## npm run synth-extra-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.112&pm;0.003s |
| ✨  Testapp002 all require() | 0.258&pm;0.007s |
| ✨  Testapp002Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Stage.synth() | 0.035&pm;0.001s |
| ✨  Testapp002 total processing time | 0.308&pm;0.009s |
| ✨  Testapp002 processing time no imports | 0.050&pm;0.002s |
| ✨  execProgram node bin/testapp002.js | 0.366&pm;0.010s |
| real | 0.996&pm;0.015s |
| user | 0.975&pm;0.014s |
| sys | 0.172&pm;0.004s |


## npm run hotswap-extra-ipc


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.110&pm;0.002s |
| ✨  Testapp002 all require() | 0.257&pm;0.004s |
| ✨  Testapp002Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Stage.synth() | 0.035&pm;0.001s |
| ✨  Testapp002 total processing time | 0.308&pm;0.004s |
| ✨  Testapp002 processing time no imports | 0.051&pm;0.002s |
| ✨  execProgram node bin/testapp002.js | 0.365&pm;0.008s |
| ✨  Synthesis time | 0.375&pm;0.008s |
| ✨  Deployment time | 0.221&pm;0.012s |
| ✨  Total time | 0.594&pm;0.020s |
| real | 2.486&pm;0.116s |
| user | 1.461&pm;0.032s |
| sys | 0.238&pm;0.006s |


## npm run synth-extra-ipc-many


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp002Stack all require() | 0.108&pm;0.002s |
| ✨  Testapp002 all require() | 0.250&pm;0.004s |
| ✨  Testapp002Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Stage.synth() | 0.034&pm;0.001s |
| ✨  Testapp002 total processing time | 0.299&pm;0.005s |
| ✨  Testapp002 processing time no imports | 0.049&pm;0.001s |
| ✨  execProgram node bin/testapp002.js | 0.358&pm;0.007s |
| real | 7.529&pm;0.053s |
| user | 7.499&pm;0.057s |
| sys | 1.288&pm;0.016s |

# testapp003


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp003 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp003 import * as cdk from 'aws-cdk-lib' | 0.124&pm;0.013s |
| ✨  Testapp003Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.016&pm;0.001s |
| ✨  Testapp003Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.049&pm;0.005s |
| ✨  Testapp003Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.002s |
| ✨  Testapp003Stack all import | 0.069&pm;0.007s |
| ✨  Testapp003 import { Testapp003Stack } from '../lib/testapp003-stack' | 0.090&pm;0.008s |
| ✨  Testapp003 all import | 0.216&pm;0.020s |
| ✨  Testapp001Stack ctor minus super() | 0.014&pm;0.002s |
| ✨  Testapp003 total processing time | 0.270&pm;0.026s |
| ✨  Testapp003 processing time no imports | 0.054&pm;0.007s |
| ✨  Synthesis time | 2.241&pm;0.120s |
| ✨  Deployment time | 0.447&pm;0.032s |
| ✨  Total time | 2.687&pm;0.129s |
| real | 4.699&pm;0.420s |
| user | 4.550&pm;0.141s |
| sys | 0.487&pm;0.040s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp003 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp003 import * as cdk from 'aws-cdk-lib' | 0.124&pm;0.018s |
| ✨  Testapp003Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp003Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.017&pm;0.004s |
| ✨  Testapp003Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.050&pm;0.010s |
| ✨  Testapp003Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp003Stack all import | 0.071&pm;0.014s |
| ✨  Testapp003 import { Testapp003Stack } from '../lib/testapp003-stack' | 0.092&pm;0.015s |
| ✨  Testapp003 all import | 0.218&pm;0.033s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp003 total processing time | 0.268&pm;0.035s |
| ✨  Testapp003 processing time no imports | 0.050&pm;0.003s |
| real | 2.783&pm;0.222s |
| user | 3.939&pm;0.134s |
| sys | 0.411&pm;0.040s |

# testapp004


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp004Stack all require() | 0.073&pm;0.005s |
| ✨  Testapp004 all require() | 0.213&pm;0.033s |
| ✨  Testapp004Stack ctor minus super() | 0.015&pm;0.002s |
| ✨  Testapp004 total processing time | 0.265&pm;0.037s |
| ✨  Testapp004 processing time no imports | 0.052&pm;0.004s |
| ✨  Synthesis time | 0.341&pm;0.039s |
| ✨  Deployment time | 0.485&pm;0.073s |
| ✨  Total time | 0.824&pm;0.079s |
| real | 2.705&pm;0.227s |
| user | 1.375&pm;0.049s |
| sys | 0.196&pm;0.024s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp004Stack all require() | 0.076&pm;0.014s |
| ✨  Testapp004 all require() | 0.208&pm;0.032s |
| ✨  Testapp004Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Testapp004 total processing time | 0.259&pm;0.034s |
| ✨  Testapp004 processing time no imports | 0.050&pm;0.002s |
| real | 0.915&pm;0.045s |
| user | 0.881&pm;0.026s |
| sys | 0.131&pm;0.007s |

# testapp005


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp005 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp005 import { App } from '@aws-cdk/core' | 0.065&pm;0.002s |
| ✨  Testapp005Stack import { Stack, StackProps } from '@aws-cdk/core' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Bucket } from '@aws-cdk/aws-s3' | 0.027&pm;0.002s |
| ✨  Testapp005Stack import * as lambda from '@aws-cdk/aws-lambda' | 0.079&pm;0.004s |
| ✨  Testapp005Stack import * as s3deploy from '@aws-cdk/aws-s3-deployment' | 0.005&pm;0.001s |
| ✨  Testapp005Stack all import | 0.111&pm;0.006s |
| ✨  Testapp005 import { Testapp005Stack } from '../lib/testapp005-stack' | 0.132&pm;0.007s |
| ✨  Testapp005 all import | 0.199&pm;0.007s |
| ✨  Testapp005Stack ctor minus super() | 0.041&pm;0.006s |
| ✨  Testapp005 total processing time | 0.297&pm;0.012s |
| ✨  Testapp005 processing time no imports | 0.099&pm;0.006s |
| ✨  Synthesis time | 1.505&pm;0.025s |
| ✨  Deployment time | 0.429&pm;0.032s |
| ✨  Total time | 1.935&pm;0.039s |
| real | 6.061&pm;0.111s |
| user | 6.279&pm;0.070s |
| sys | 0.928&pm;0.015s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp005 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp005 import { App } from '@aws-cdk/core' | 0.073&pm;0.016s |
| ✨  Testapp005Stack import { Stack, StackProps } from '@aws-cdk/core' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp005Stack import { Bucket } from '@aws-cdk/aws-s3' | 0.029&pm;0.006s |
| ✨  Testapp005Stack import * as lambda from '@aws-cdk/aws-lambda' | 0.089&pm;0.015s |
| ✨  Testapp005Stack import * as s3deploy from '@aws-cdk/aws-s3-deployment' | 0.005&pm;0.002s |
| ✨  Testapp005Stack all import | 0.123&pm;0.021s |
| ✨  Testapp005 import { Testapp005Stack } from '../lib/testapp005-stack' | 0.144&pm;0.021s |
| ✨  Testapp005 all import | 0.219&pm;0.036s |
| ✨  Testapp005Stack ctor minus super() | 0.040&pm;0.005s |
| ✨  Testapp005 total processing time | 0.315&pm;0.038s |
| ✨  Testapp005 processing time no imports | 0.097&pm;0.005s |
| real | 5.306&pm;0.297s |
| user | 6.000&pm;0.080s |
| sys | 0.935&pm;0.099s |

# testapp006


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp006Stack all require() | 0.109&pm;0.003s |
| ✨  Testapp006 all require() | 0.185&pm;0.006s |
| ✨  Testapp006Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Testapp006 total processing time | 0.248&pm;0.007s |
| ✨  Testapp006 processing time no imports | 0.063&pm;0.002s |
| ✨  Synthesis time | 0.329&pm;0.009s |
| ✨  Deployment time | 0.405&pm;0.036s |
| ✨  Total time | 0.734&pm;0.039s |
| real | 4.806&pm;0.066s |
| user | 4.061&pm;0.055s |
| sys | 0.736&pm;0.027s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp006Stack all require() | 0.117&pm;0.022s |
| ✨  Testapp006 all require() | 0.197&pm;0.036s |
| ✨  Testapp006Stack ctor minus super() | 0.015&pm;0.002s |
| ✨  Testapp006 total processing time | 0.263&pm;0.039s |
| ✨  Testapp006 processing time no imports | 0.065&pm;0.003s |
| real | 3.978&pm;0.071s |
| user | 3.746&pm;0.047s |
| sys | 0.711&pm;0.019s |

# testapp007


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp007 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp007 import * as cdk from 'aws-cdk-lib' | 0.557&pm;0.006s |
| ✨  Testapp007Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.000&pm;0.000s |
| ✨  Testapp007Stack all import | 0.001&pm;0.001s |
| ✨  Testapp007 import { Testapp007Stack } from '../lib/testapp007-stack' | 0.022&pm;0.001s |
| ✨  Testapp007 all import | 0.580&pm;0.006s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp007 total processing time | 0.629&pm;0.007s |
| ✨  Testapp007 processing time no imports | 0.050&pm;0.001s |
| ✨  Synthesis time | 2.524&pm;0.032s |
| ✨  Deployment time | 0.228&pm;0.052s |
| ✨  Total time | 2.753&pm;0.047s |
| real | 4.472&pm;0.120s |
| user | 4.732&pm;0.049s |
| sys | 0.522&pm;0.006s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp007 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp007 import * as cdk from 'aws-cdk-lib' | 0.558&pm;0.004s |
| ✨  Testapp007Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.000&pm;0.000s |
| ✨  Testapp007Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.000&pm;0.000s |
| ✨  Testapp007Stack all import | 0.001&pm;0.001s |
| ✨  Testapp007 import { Testapp007Stack } from '../lib/testapp007-stack' | 0.022&pm;0.001s |
| ✨  Testapp007 all import | 0.581&pm;0.004s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp007 total processing time | 0.630&pm;0.004s |
| ✨  Testapp007 processing time no imports | 0.049&pm;0.001s |
| real | 3.070&pm;0.018s |
| user | 4.278&pm;0.013s |
| sys | 0.479&pm;0.007s |

# testapp008


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp008Stack all require() | 0.000&pm;0.000s |
| ✨  Testapp008 all require() | 0.568&pm;0.010s |
| ✨  Testapp008Stack ctor minus super() | 0.014&pm;0.001s |
| ✨  Testapp008 total processing time | 0.616&pm;0.010s |
| ✨  Testapp008 processing time no imports | 0.048&pm;0.002s |
| ✨  Synthesis time | 0.692&pm;0.010s |
| ✨  Deployment time | 0.228&pm;0.052s |
| ✨  Total time | 0.920&pm;0.052s |
| real | 2.640&pm;0.105s |
| user | 1.686&pm;0.031s |
| sys | 0.239&pm;0.010s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp008Stack all require() | 0.000&pm;0.000s |
| ✨  Testapp008 all require() | 0.591&pm;0.063s |
| ✨  Testapp008Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp008 total processing time | 0.639&pm;0.063s |
| ✨  Testapp008 processing time no imports | 0.048&pm;0.001s |
| real | 1.276&pm;0.070s |
| user | 1.238&pm;0.014s |
| sys | 0.193&pm;0.007s |

# testapp009


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp009Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.000&pm;0.000s |
| ✨  Testapp009Stack all import | 0.001&pm;0.000s |
| ✨  Testapp009 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp009 import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp009 import { Testapp009Stack } from '../lib/testapp009-stack' | 0.000&pm;0.000s |
| ✨  Testapp009 all import | 0.000&pm;0.000s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp009 total processing time | 0.048&pm;0.001s |
| ✨  Testapp009 processing time no imports | 0.048&pm;0.001s |
| ✨  Synthesis time | 0.658&pm;0.008s |
| ✨  Deployment time | 0.414&pm;0.015s |
| ✨  Total time | 1.072&pm;0.018s |
| real | 2.896&pm;0.077s |
| user | 1.641&pm;0.019s |
| sys | 0.242&pm;0.006s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp009Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.000&pm;0.000s |
| ✨  Testapp009Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.000&pm;0.000s |
| ✨  Testapp009Stack all import | 0.001&pm;0.001s |
| ✨  Testapp009 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp009 import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp009 import { Testapp009Stack } from '../lib/testapp009-stack' | 0.000&pm;0.000s |
| ✨  Testapp009 all import | 0.000&pm;0.000s |
| ✨  Testapp001Stack ctor minus super() | 0.014&pm;0.002s |
| ✨  Testapp009 total processing time | 0.050&pm;0.002s |
| ✨  Testapp009 processing time no imports | 0.050&pm;0.002s |
| real | 1.294&pm;0.125s |
| user | 1.199&pm;0.019s |
| sys | 0.213&pm;0.025s |

# testapp010


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp010 import 'source-map-support/register' | 0.000&pm;0.001s |
| ✨  Testapp010 import * as cdk from 'aws-cdk-lib' | 0.121&pm;0.004s |
| ✨  Testapp010Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.015&pm;0.001s |
| ✨  Testapp010Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.046&pm;0.002s |
| ✨  Testapp010Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.000s |
| ✨  Testapp010Stack all import | 0.066&pm;0.003s |
| ✨  Testapp010 import { Testapp010Stack } from '../lib/testapp010-stack' | 0.084&pm;0.003s |
| ✨  Testapp010 all import | 0.206&pm;0.006s |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.001s |
| ✨  Testapp010 total processing time | 0.255&pm;0.008s |
| ✨  Testapp010 processing time no imports | 0.049&pm;0.002s |
| ✨  Synthesis time | 0.718&pm;0.017s |
| ✨  Deployment time | 0.435&pm;0.025s |
| ✨  Total time | 1.152&pm;0.034s |
| real | 3.021&pm;0.166s |
| user | 1.691&pm;0.041s |
| sys | 0.235&pm;0.012s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp010 import 'source-map-support/register' | 0.001&pm;0.001s |
| ✨  Testapp010 import * as cdk from 'aws-cdk-lib' | 0.124&pm;0.011s |
| ✨  Testapp010Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp010Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.016&pm;0.003s |
| ✨  Testapp010Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.048&pm;0.006s |
| ✨  Testapp010Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp010Stack all import | 0.068&pm;0.009s |
| ✨  Testapp010 import { Testapp010Stack } from '../lib/testapp010-stack' | 0.086&pm;0.009s |
| ✨  Testapp010 all import | 0.211&pm;0.020s |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.001s |
| ✨  Testapp010 total processing time | 0.260&pm;0.020s |
| ✨  Testapp010 processing time no imports | 0.049&pm;0.001s |
| real | 1.305&pm;0.146s |
| user | 1.228&pm;0.019s |
| sys | 0.192&pm;0.021s |

# testapp011


## npm run hotswap


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp011 import 'source-map-support/register' | 0.000&pm;0.000s |
| ✨  Testapp011 import * as cdk from 'aws-cdk-lib' | 0.121&pm;0.010s |
| ✨  Testapp011Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.000s |
| ✨  Testapp011Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp011Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.015&pm;0.001s |
| ✨  Testapp011Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.048&pm;0.004s |
| ✨  Testapp011Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp011Stack all import | 0.068&pm;0.007s |
| ✨  Testapp011 import { Testapp011Stack } from '../lib/testapp011-stack' | 0.089&pm;0.007s |
| ✨  Testapp011 all import | 0.212&pm;0.018s |
| ✨  Testapp001Stack ctor minus super() | 0.013&pm;0.001s |
| ✨  Testapp011 total processing time | 0.263&pm;0.019s |
| ✨  Testapp011 processing time no imports | 0.051&pm;0.002s |
| ✨  Synthesis time | 2.176&pm;0.058s |
| ✨  Deployment time | 0.440&pm;0.029s |
| ✨  Total time | 2.615&pm;0.073s |
| real | 4.478&pm;0.164s |
| user | 4.453&pm;0.095s |
| sys | 0.468&pm;0.025s |


## npm run synth


| Measurement | Mean and Standard Deviation |
| ----------- | --------------------------- |
| ✨  Testapp011 import 'source-map-support/register' | 0.001&pm;0.000s |
| ✨  Testapp011 import * as cdk from 'aws-cdk-lib' | 0.118&pm;0.012s |
| ✨  Testapp011Stack import * as cdk from 'aws-cdk-lib' | 0.000&pm;0.001s |
| ✨  Testapp011Stack import { Construct } from 'constructs' | 0.000&pm;0.000s |
| ✨  Testapp011Stack import * as s3 from 'aws-cdk-lib/aws-s3' | 0.015&pm;0.002s |
| ✨  Testapp011Stack import * as lambda from 'aws-cdk-lib/aws-lambda' | 0.047&pm;0.006s |
| ✨  Testapp011Stack import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment' | 0.004&pm;0.001s |
| ✨  Testapp011Stack all import | 0.067&pm;0.009s |
| ✨  Testapp011 import { Testapp011Stack } from '../lib/testapp011-stack' | 0.087&pm;0.009s |
| ✨  Testapp011 all import | 0.207&pm;0.021s |
| ✨  Testapp001Stack ctor minus super() | 0.012&pm;0.000s |
| ✨  Testapp011 total processing time | 0.255&pm;0.022s |
| ✨  Testapp011 processing time no imports | 0.048&pm;0.001s |
| real | 2.730&pm;0.215s |
| user | 3.872&pm;0.027s |
| sys | 0.400&pm;0.032s |

