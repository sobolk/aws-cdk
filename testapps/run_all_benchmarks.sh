#!/bin/bash

cd testapp001
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run synth-no-ipc"
../run_benchmark.sh "npm run synth-extra-ipc"
../run_benchmark.sh "npm run synth-extra-no-ipc"
../run_benchmark.sh "npm run hotswap"
../run_benchmark.sh "npm run hotswap-no-ipc"
../run_benchmark.sh "npm run hotswap-extra-ipc"
../run_benchmark.sh "npm run hotswap-extra-no-ipc"
cd ..

cd testapp002
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run synth-no-ipc"
../run_benchmark.sh "npm run synth-extra-ipc"
../run_benchmark.sh "npm run synth-extra-no-ipc"
../run_benchmark.sh "npm run hotswap"
../run_benchmark.sh "npm run hotswap-no-ipc"
../run_benchmark.sh "npm run hotswap-extra-ipc"
../run_benchmark.sh "npm run hotswap-extra-no-ipc"
cd ..

cd testapp003
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp004
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp005
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..

cd testapp006
../run_benchmark.sh "npm run synth"
../run_benchmark.sh "npm run hotswap"
cd ..
