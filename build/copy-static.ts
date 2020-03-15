import * as shelljs from 'shelljs'

shelljs.cp('-r', 'config', 'dist/')
shelljs.cp('application.yml', 'dist/')
shelljs.cp('package.json', 'dist/')
