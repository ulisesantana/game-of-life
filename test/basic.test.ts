import * as assert from 'assert';

describe('Basic tests', function () {
  it('Should be true', function () {
    assert.equal(1, true);
    assert.notStrictEqual(1, true);
    assert.strictEqual(true, true);
  });
});
