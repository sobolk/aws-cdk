
# Setup

All changes made to the code can be reviewed in https://github.com/sobolk/aws-cdk/pull/1 .

## CDK packages

CDK packages has been changed to:
1. Measure execution time of synthesis closer to a place that uses CDK app.
2. Added ability to inject CDK app into CDK cli to eliminate IPC calls.

## Test apps

All test apps have same set of resources:
1. Three lambda functions
2. S3 Bucket
3. S3 Bucket deployment

All test apps has been instrumented to measure time of imports and actual logic execution.

### testapp001

1. Created with `cdk init app --language typescript`
2. Is linked through filesystem to CDK packages, i.e. `"aws-cdk-lib": "file:../../packages/aws-cdk-lib"` and `"aws-cdk": "file:../../packages/aws-cdk"`
3. The `--prefer-ts-exts` parameter has been removed from `app` in `cdk.json` to prevent `ts-node` from compiling linked CDK packages
4. Has the following scenarios:
   1. `testapp001.ts` - basic CDK app
   2. `testapp001.no-ipc.ts` - injects basic CDK app into programmatic CLI call to avoid IPC
   3. `testapp001.extra-ipc.ts` - simulates Amplify scenario, i.e. Amplify IPC-calling CDK cli, CDK cli IPC-calling basic CDK app.
   4. `testapp001.extra-no-ipc.ts` - simulates Amplify scenario, but with all IPC calls removed.
   5. `testapp001.extra-ipc-many-deployments.ts` - variation of `testapp002.extra-ipc.ts` that executes same scenario 10 times in a loop.
   6. `testapp001.extra-no-ipc-many-deployments.ts` - variation of `testapp001.extra-no-ipc.ts` that executes same scenario 10 times in a loop.

### testapp002

The `testapp002` is a copy of `testapp001` converted to Javascript.

1. Created with `cdk init app --language javascript`
2. Is linked through filesystem to CDK packages, i.e. `"aws-cdk-lib": "file:../../packages/aws-cdk-lib"` and `"aws-cdk": "file:../../packages/aws-cdk"`
3. Copied logic from `testapp001` converted to Javascript. It has exact same scenarios but in Javascript.

### testapp003

The `testapp003` is a sibling of `testapp001`. The purpose is to check if linking CDK packages via file system brings observable differences in experiments.

1. Created with `cdk init app --language typescript`
2. Dependencies left as is.
3. Has the following scenarios:
   1. `testapp003.ts` - basic CDK app

### testapp004

The `testapp004` is a copy of `testapp003` converted to Javascript. The purpose and scenarios are the same.

1. Created with `cdk init app --language javascript`
2. Dependencies left as is.
3. Copied logic from `testapp003` converted to Javascript. It has exact same scenarios but in Javascript.

### testapp005

The `testapp005` is a copy of `testapp003` adapted to use CDK V1. The purpose is to see if V1 that was not monolithic is faster.

### testapp006

The `testapp006` is a copy of `testapp004` adapted to use CDK V1. The purpose is to see if V1 that was not monolithic is faster.

# Experiment results

## Raw results

Raw results can be seen in `summary.md` as well as partial `.md` files scattered in `testapps` directory.
See https://github.com/sobolk/aws-cdk/blob/synth-experiments/testapps/summary.md .

## Insights

### Single deployment

#### synth

| Measurement                    | testapp001 basic | testapp001 no IPC | testapp001 extra IPC | testapp001 extra no IPC | testapp002 basic | testapp002 no IPC | testapp002 extra IPC | testapp002 extra no IPC | testapp003      | testapp004      | testapp005      | testapp006      |
|--------------------------------|------------------|-------------------|----------------------|-------------------------|------------------|-------------------|----------------------|-------------------------|-----------------|-----------------|-----------------|-----------------|
| Stack all imports              | 0.122&pm;0.012s  | 0.117&pm;0.004s   | 0.111&pm;0.002s      | 0.117&pm;0.004s         | 0.113&pm;0.003s  | 0.112&pm;0.003s   | 0.112&pm;0.003s      | 0.112&pm;0.003s         | 0.071&pm;0.014s | 0.076&pm;0.014s | 0.123&pm;0.021s | 0.117&pm;0.022s |
| App all imports                | 0.307&pm;0.026s  | 0.286&pm;0.006s   | 0.285&pm;0.002s      | 0.284&pm;0.007s         | 0.260&pm;0.005s  | 0.240&pm;0.005s   | 0.258&pm;0.007s      | 0.242&pm;0.008s         | 0.218&pm;0.033s | 0.208&pm;0.032s | 0.219&pm;0.036s | 0.197&pm;0.036s |
| Stage.synth()                  | 0.037&pm;0.003s  | 0.031&pm;0.001s   | 0.035&pm;0.002s      | 0.033&pm;0.002s         | 0.035&pm;0.001s  | 0.031&pm;0.001s   | 0.035&pm;0.001s      | 0.032&pm;0.001s         | N/A             | N/A             | N/A             | N/A             |
| Synth from CLI side            | 4.449&pm;0.108s  | 0.032&pm;0.001s   | 4.260&pm;0.019s      | 0.033&pm;0.002s         | 0.371&pm;0.010s  | 0.031&pm;0.001s   | 0.366&pm;0.010s      | 0.032&pm;0.001s         | N/A             | N/A             | N/A             | N/A             |
| App total processing time      | 0.362&pm;0.028s  | 0.428&pm;0.008s   | 0.335&pm;0.003s      | 0.425&pm;0.012s         | 0.311&pm;0.006s  | 0.372&pm;0.007s   | 0.308&pm;0.009s      | 0.378&pm;0.012s         | 0.268&pm;0.035s | 0.259&pm;0.034s | 0.315&pm;0.038s | 0.263&pm;0.039s |
| App processing time no imports | 0.055&pm;0.004s  | 0.143&pm;0.005s   | 0.050&pm;0.002s      | 0.141&pm;0.005s         | 0.051&pm;0.001s  | 0.132&pm;0.004s   | 0.050&pm;0.002s      | 0.136&pm;0.005s         | 0.050&pm;0.003s | 0.050&pm;0.002s | 0.097&pm;0.005s | 0.065&pm;0.003s |
| real                           | 5.088&pm;0.172s  | 6.713&pm;0.098s   | 5.454&pm;0.035s      | 6.623&pm;0.123s         | 0.968&pm;0.013s  | 0.891&pm;0.031s   | 0.996&pm;0.015s      | 0.892&pm;0.026s         | 2.783&pm;0.222s | 0.915&pm;0.045s | 5.306&pm;0.297s | 3.978&pm;0.071s |
| user                           | 7.453&pm;0.080s  | 9.587&pm;0.123s   | 8.577&pm;0.081s      | 9.513&pm;0.128s         | 0.955&pm;0.007s  | 0.906&pm;0.016s   | 0.975&pm;0.014s      | 0.903&pm;0.018s         | 3.939&pm;0.134s | 0.881&pm;0.026s | 6.000&pm;0.080s | 3.746&pm;0.047s |
| sys                            | 0.817&pm;0.018s  | 1.138&pm;0.027s   | 0.823&pm;0.015s      | 1.127&pm;0.045s         | 0.176&pm;0.005s  | 0.166&pm;0.010s   | 0.172&pm;0.004s      | 0.168&pm;0.009s         | 0.411&pm;0.040s | 0.131&pm;0.007s | 0.935&pm;0.099s | 0.711&pm;0.019s |

#### hotswap

| Measurement                    | testapp001 basic | testapp001 no IPC | testapp001 extra IPC | testapp001 extra no IPC | testapp002 basic | testapp002 no IPC | testapp002 extra IPC | testapp002 extra no IPC | testapp003      | testapp004      | testapp005      | testapp006      |
|--------------------------------|------------------|-------------------|----------------------|-------------------------|------------------|-------------------|----------------------|-------------------------|-----------------|-----------------|-----------------|-----------------|
| Stack all imports              | 0.115&pm;0.002s  | 0.121&pm;0.004s   | 0.114&pm;0.003s      | 0.118&pm;0.003s         | 0.112&pm;0.004s  | 0.114&pm;0.004s   | 0.110&pm;0.002s      | 0.112&pm;0.002s         | 0.069&pm;0.007s | 0.073&pm;0.005s | 0.111&pm;0.006s | 0.109&pm;0.003s |
| App all imports                | 0.294&pm;0.003s  | 0.294&pm;0.008s   | 0.292&pm;0.003s      | 0.288&pm;0.006s         | 0.258&pm;0.010s  | 0.246&pm;0.007s   | 0.257&pm;0.004s      | 0.243&pm;0.004s         | 0.216&pm;0.020s | 0.213&pm;0.033s | 0.199&pm;0.007s | 0.185&pm;0.006s |
| Stage.synth()                  | 0.036&pm;0.002s  | 0.032&pm;0.001s   | 0.037&pm;0.003s      | 0.031&pm;0.001s         | 0.035&pm;0.002s  | 0.032&pm;0.001s   | 0.035&pm;0.001s      | 0.032&pm;0.001s         | N/A             | N/A             | N/A             | N/A             |
| Synth from CLI side            | 4.392&pm;0.050s  | 0.032&pm;0.001s   | 4.397&pm;0.055s      | 0.031&pm;0.001s         | 0.369&pm;0.013s  | 0.033&pm;0.001s   | 0.365&pm;0.008s      | 0.033&pm;0.001s         | N/A             | N/A             | N/A             | N/A             |
| App total processing time      | 0.346&pm;0.004s  | 2.251&pm;0.123s   | 0.344&pm;0.004s      | 2.295&pm;0.124s         | 0.310&pm;0.013s  | 1.839&pm;0.167s   | 0.308&pm;0.004s      | 1.802&pm;0.120s         | 0.270&pm;0.026s | 0.265&pm;0.037s | 0.297&pm;0.012s | 0.248&pm;0.007s |
| App processing time no imports | 0.052&pm;0.002s  | 1.956&pm;0.128s   | 0.052&pm;0.003s      | 2.007&pm;0.122s         | 0.052&pm;0.004s  | 1.594&pm;0.165s   | 0.051&pm;0.002s      | 1.559&pm;0.121s         | 0.054&pm;0.007s | 0.052&pm;0.004s | 0.099&pm;0.006s | 0.063&pm;0.002s |
| Synthesis time                 | 4.404&pm;0.051s  | 0.043&pm;0.005s   | 4.409&pm;0.056s      | 0.041&pm;0.003s         | 0.380&pm;0.012s  | 0.041&pm;0.003s   | 0.375&pm;0.008s      | 0.040&pm;0.000s         | 2.241&pm;0.120s | 0.341&pm;0.039s | 1.505&pm;0.025s | 0.329&pm;0.009s |
| Deployment time                | 0.614&pm;0.018s  | 0.626&pm;0.023s   | 0.655&pm;0.102s      | 0.624&pm;0.019s         | 0.230&pm;0.036s  | 0.224&pm;0.022s   | 0.221&pm;0.012s      | 0.223&pm;0.016s         | 0.447&pm;0.032s | 0.485&pm;0.073s | 0.429&pm;0.032s | 0.405&pm;0.036s |
| Total time                     | 5.018&pm;0.054s  | 0.669&pm;0.023s   | 5.063&pm;0.108s      | 0.664&pm;0.019s         | 0.611&pm;0.037s  | 0.268&pm;0.023s   | 0.594&pm;0.020s      | 0.265&pm;0.018s         | 2.687&pm;0.129s | 0.824&pm;0.079s | 1.935&pm;0.039s | 0.734&pm;0.039s |
| real                           | 6.849&pm;0.100s  | 8.560&pm;0.101s   | 7.523&pm;0.111s      | 8.536&pm;0.157s         | 2.483&pm;0.127s  | 2.375&pm;0.171s   | 2.486&pm;0.116s      | 2.340&pm;0.112s         | 4.699&pm;0.420s | 2.705&pm;0.227s | 6.061&pm;0.111s | 4.806&pm;0.066s |
| user                           | 8.095&pm;0.056s  | 10.352&pm;0.094s  | 9.475&pm;0.077s      | 10.332&pm;0.147s        | 1.437&pm;0.031s  | 1.373&pm;0.033s   | 1.461&pm;0.032s      | 1.375&pm;0.022s         | 4.550&pm;0.141s | 1.375&pm;0.049s | 6.279&pm;0.070s | 4.061&pm;0.055s |
| sys                            | 0.864&pm;0.010s  | 1.254&pm;0.050s   | 0.941&pm;0.009s      | 1.194&pm;0.034s         | 0.226&pm;0.008s  | 0.233&pm;0.008s   | 0.238&pm;0.006s      | 0.235&pm;0.005s         | 0.487&pm;0.040s | 0.196&pm;0.024s | 0.928&pm;0.015s | 0.736&pm;0.027s |

### Multiple deployments

#### hotswap

| Measurement | testapp001 extra ipc many | testapp001 extra no ipc many | testapp002 extra ipc many | testapp002 extra no ipc many |
| ------------- | ------------------ | ------------------- | ---------------------- | -- |
| Synthesis time | 4.473&pm;0.099s | 0.029&pm;0.009s | 0.376&pm;0.023s | 0.025&pm;0.009s |
| Deployment time | 0.668&pm;0.091s | 2.316&pm;0.177s | 0.234&pm;0.058s | 0.264&pm;0.041s |
| Total time | 5.140&pm;0.134s | 2.345&pm;0.177s | 0.609&pm;0.062s | 0.289&pm;0.041s |
| real | 69.657&pm;1.284s | 39.950&pm;1.143s | 22.076&pm;0.694s | 12.475&pm;1.025s |
| user | 82.040&pm;0.907s | 21.155&pm;0.840s | 12.519&pm;0.232s | 4.060&pm;0.290s |
| sys | 8.884&pm;0.244s | 2.218&pm;0.078s | 1.893&pm;0.098s | 0.619&pm;0.038s |
