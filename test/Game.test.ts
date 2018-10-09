import * as assert from 'assert';
import { CellFactory as Cell } from '../src/Cell';
import { createBoard, getNeighbours, nextGeneration } from '../src/Game';


describe('Game tests', function () {

  it('Should create an Array of Cell[]', function () {
    const board = createBoard(3, 3);
    assert.strictEqual(board.length, 3);
    assert.strictEqual(board[0].length, 3);
    assert.strictEqual(
      board.every(row => row.every(
        cell => [true, false].includes(cell.value))
      ),
      true
    );
  });

  it('Should retrieve the number neighbours from a given position', function () {
    const board = [
      [Cell(!!1), Cell(!!0), Cell(!!1)],
      [Cell(!!1), Cell(!!1), Cell(!!0)],
      [Cell(!!0), Cell(!!0), Cell(!!1)],
      [Cell(!!0), Cell(!!0), Cell(!!1)]
    ];
    assert.deepStrictEqual(getNeighbours(board, 0, 0), 2, '[0,0]');
    assert.deepStrictEqual(getNeighbours(board, 0, 1), 4, '[0,1]');
    assert.deepStrictEqual(getNeighbours(board, 0, 2), 1, '[0,2]');
    assert.deepStrictEqual(getNeighbours(board, 1, 0), 2, '[1,0]');
    assert.deepStrictEqual(getNeighbours(board, 1, 1), 4, '[1,1]');
    assert.deepStrictEqual(getNeighbours(board, 1, 2), 3, '[1,2]');
    assert.deepStrictEqual(getNeighbours(board, 2, 0), 2, '[2,0]');
    assert.deepStrictEqual(getNeighbours(board, 2, 1), 4, '[2,1]');
    assert.deepStrictEqual(getNeighbours(board, 2, 2), 2, '[2,2]');
    assert.deepStrictEqual(getNeighbours(board, 3, 0), 0, '[3,0]');
    assert.deepStrictEqual(getNeighbours(board, 3, 1), 2, '[3,1]');
    assert.deepStrictEqual(getNeighbours(board, 3, 2), 1, '[3,2]');
  });

  it('Should pass the turn and update the board', function () {
    const board = [
      [Cell(!!1), Cell(!!0), Cell(!!1)],
      [Cell(!!1), Cell(!!1), Cell(!!0)],
      [Cell(!!1), Cell(!!1), Cell(!!0)],
      [Cell(!!0), Cell(!!0), Cell(!!1)]
    ];

    const expect = [
      [Cell(!!1), Cell(!!0), Cell(!!0)],
      [Cell(!!0), Cell(!!0), Cell(!!1)],
      [Cell(!!1), Cell(!!0), Cell(!!1)],
      [Cell(!!0), Cell(!!1), Cell(!!0)]
    ];

    const newGeneration = nextGeneration(board);
    assert.deepStrictEqual(
      newGeneration.every((r, x) =>
        r.every((c, y) => c.value === expect[x][y].value)),
      true
    );
  });

});
