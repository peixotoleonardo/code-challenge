const fs = require('node:fs');
const { pipeline } = require('node:stream/promises');

/**
 * Count amount of chars of a given file
 * 
 * @param {string} filePath
 * 
 * @returns {Promise<number>} 
 */
async function countChars(filePath) {
  let count = 0;

  await pipeline(
    fs.createReadStream(filePath),
    async function* (source) {
      source.setEncoding('utf8');

      for await (const chunk of source) {
        count += chunk.length;
      }
    }
  )

  return count;
}

module.exports = countChars;
