#! /usr/bin/env node
const inputParser = require('./input-parser');
const componentGenerator = require('./component-generator');
const testGenerator = require('./test-generator');
const fileSaver = require('./file-saver');
const controller = require('./controller');

controller(process.argv, {inputParser, componentGenerator, testGenerator, fileSaver});
