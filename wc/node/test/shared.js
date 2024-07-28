const path = require('node:path');
const util = require('node:util');
const assert = require('assert/strict');

const exec = util.promisify(require('node:child_process').exec);

const FILE_PATH = path.join(path.resolve(__dirname, '..', '..'), 'test.txt');

const regex = /(\d+)\s+(\S+)/g

/**
 * @param {string} output 
 */
const formatOutput = (output) => {
  return [...output.matchAll(regex)]
    .map(([_, size, file]) => ({ file, size: +size }));
}

/**
 * @param {string} option
 */
const validateWcOption = (option) => {
  const validOptions = ['c', 'l'];
  
  if (option === '') {
    return;
  }
  
  if (!option) {
    throw new TypeError('option is required');
  }

  if (!validOptions.includes(option)) {
    throw new TypeError(`option ${option} is invalid, you need use some of this options: ${validOptions.join(', ')}`);
  }
}

/**
 * @param {string} filePath 
 * @param {string} option
 */
const wc = async (filePath, option) => {
  validateWcOption(option);

  const { stdout } = await exec(`wc ${filePath} ${option ? `-${option}`: ''}`);

  return formatOutput(stdout);
}

module.exports = {
  wc,
  FILE_PATH,
};
