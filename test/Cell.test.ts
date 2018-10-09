import * as assert from 'assert';
import { CellFactory as Cell } from '../src/Cell';

describe('Cell tests', function () {

  it('Should be created as alive or dead', function () {
    const dead = Cell(false);
    const alive = Cell(true);
    assert.strictEqual(alive.value, true);
    assert.strictEqual(dead.value, false);
  });

  it('Should die if has less than 2 neighbors and is alive', function () {
    const alive = Cell(true).next(1);
    const dead = Cell(false).next(1);
    assert.strictEqual(alive.value, false);
    assert.strictEqual(dead.value, false);
  });

  it('Should keep alive if has 2 or 3 neighbors and is alive', function () {
    const alive = Cell(true).next(2);
    assert.strictEqual(alive.value, true);
    assert.strictEqual(alive.next(3).value, true);
  });

  it('Should die if has more than 3 neighbors and is alive', function () {
    const alive = Cell(true).next(4);
    const dead = Cell(false).next(4);

    assert.strictEqual(alive.value, false);
    assert.strictEqual(dead.value, false);
  });

  it('Should born if has 3 neighbors and is dead', function () {
    const dead = Cell(false).next(3);
    assert.strictEqual(dead.value, true);
  });


});
