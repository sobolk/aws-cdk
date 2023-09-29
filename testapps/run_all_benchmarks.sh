#!/bin/bash

cd testapp001
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run synth-no-ipc"
../run_benchmark.sh "npm run synth-extra-ipc"
../run_benchmark.sh "npm run synth-extra-ipc-many"
../run_benchmark.sh "npm run synth-extra-ipc-many-transpile-only"
../run_benchmark.sh "npm run synth-extra-no-ipc"
../run_benchmark.sh "npm run synth-extra-no-ipc-many"
../run_benchmark.sh "npm run hotswap"
../run_benchmark.sh "npm run hotswap-no-ipc"
../run_benchmark.sh "npm run hotswap-extra-ipc"
../run_benchmark.sh "npm run hotswap-extra-ipc-many"
../run_benchmark.sh "npm run hotswap-extra-ipc-many-transpile-only"
../run_benchmark.sh "npm run hotswap-extra-no-ipc"
../run_benchmark.sh "npm run hotswap-extra-no-ipc-many"
cd ..

cd testapp002
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run synth-no-ipc"
../run_benchmark.sh "npm run synth-extra-ipc"
../run_benchmark.sh "npm run synth-extra-ipc-many"
../run_benchmark.sh "npm run synth-extra-no-ipc"
../run_benchmark.sh "npm run synth-extra-no-ipc-many"
../run_benchmark.sh "npm run hotswap"
../run_benchmark.sh "npm run hotswap-no-ipc"
../run_benchmark.sh "npm run hotswap-extra-ipc"
../run_benchmark.sh "npm run hotswap-extra-ipc-many"
../run_benchmark.sh "npm run hotswap-extra-no-ipc"
../run_benchmark.sh "npm run hotswap-extra-no-ipc-many"
cd ..

cd testapp003
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp004
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp005
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp006
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp007
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp008
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp009
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp010
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp011
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp012
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp013
npx cdk deploy --require-approval never
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..
