#!/usr/bin/env python3
import sys
import re
import statistics

log_file=sys.argv[1]
summary_file=sys.argv[2]
command=sys.argv[3]
appName=sys.argv[4]

print('Processing ' + log_file + ' into ' + summary_file);

results={}

file = open(log_file, 'r')
while True:
    line = file.readline()
    if not line:
        break
    match_result = re.search(r"(.*):\s+(\d+(.\d+)?)s", line)
    if not match_result:
        match_result = re.search(r"(real|user|sys)\s+(\d+.\d+)", line)
    if match_result:
        key = match_result.group(1)
        val = float(match_result.group(2))
        if key in results:
            entry = results[key]
        else:
            entry = []
            results[key] = entry
        entry.append(val)

f = open(summary_file, "w")

f.write('# ' + appName + '\n\n')
f.write('## ' + command + '\n\n')

f.write('\n')

f.write('| Measurement | Mean and Standard Deviation |\n')
f.write('| ----------- | --------------------------- |\n')

for key in results:
   values = results[key]
   avg = statistics.mean(values)
   stdev = statistics.stdev(values)
   f.write('| ' + key + ' | ' + "{:.3f}".format(avg) + '&pm;' + "{:.3f}".format(stdev) + 's |\n')

f.close()
