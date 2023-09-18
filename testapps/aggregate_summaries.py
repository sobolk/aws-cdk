#!/usr/bin/env python3

import glob
import os

this_script_dir_path = os.path.dirname(os.path.realpath(__file__))
cwd = os.getcwd()

if this_script_dir_path != cwd:
    raise Exception('this script must run in ' + this_script_dir_path + ' directory')

directories = ['testapp001', 'testapp002', 'testapp003', 'testapp004', 'testapp005', 'testapp006']

global_summary = ''

for directory in directories:
    global_summary += '# ' + directory + '\n\n'
    local_summary = '# ' + directory + '\n\n'

    for filename in glob.glob(directory + '/*.summary.md'):
        summary_file = open(filename, 'r')
        while True:
            line = summary_file.readline()
            if not line:
                break
            if '# ' + directory in line:
                continue
            global_summary += line
            local_summary += line
        global_summary += '\n'
        local_summary += '\n'

    f = open(os.path.join(directory, 'summary.md'), "w")
    f.write(local_summary)
    f.close()

f = open('summary.md', "w")

f.write(global_summary)
f.close()
