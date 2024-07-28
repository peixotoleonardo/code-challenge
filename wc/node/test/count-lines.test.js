const test = require('node:test');
const assert = require('node:assert/strict');

const shared = require('./shared');
const count = require('../src/count-lines');

test('given a file path should return the number of lines of the file', async () => {
    const [expected] = await shared.wc(shared.FILE_PATH, 'l');

    assert.equal(await count(shared.FILE_PATH), expected.size);
  });