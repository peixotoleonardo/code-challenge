const fs = require('node:fs');
const readline = require('node:readline');

/**
 * Count amount of lines of a given file
 * 
 * @param {string} filePath
 * 
 * @returns {Promise<number>} 
 */
function countLines(filePath) {
  return new Promise((resolve) => {
    let count = 0;

    readline.createInterface({ crlfDelay: Infinity, input: fs.createReadStream(filePath) })
      .on('line', () => ++count)
      .on('close', () => resolve(count));
  });
}

module.exports = countLines;
