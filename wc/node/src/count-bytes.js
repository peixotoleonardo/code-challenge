const fs = require('node:fs/promises');

/**
 * Count amount of bytes of a given file
 * 
 * @param {string} filePath
 * 
 * @returns {Promise<number>} - amount of bytes
 */
async function countBytes(filePath) {
  return (await fs.stat(filePath)).size;
}

module.exports = countBytes;
