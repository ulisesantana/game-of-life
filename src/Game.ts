import { CellFactory } from './Cell';
import { Cell, Board } from './types';

const getCell = (b: Board, x: number, y: number): boolean => {
  x = x >= b.length ? 0 : x < 0 ? b.length - 1 : x;
  y = y >= b[0].length ? 0 : y < 0 ? b[0].length - 1 : y;
  return b[x][y].value;
}

const print = (b: Board): void => {
  const board: string = b.reduce((acc, row) =>
    acc + row.reduce((a, c) => a + (c.value ? '\u00A4' : ' ') + ' ', '') + '\n', '');
  console.log(board);
};

export const createBoard = (rows: number, columns: number): Board =>
  Array.apply(null, new Array(rows))
    .map(_ => Array.apply(null, new Array(columns))
      .map(_ => CellFactory()));

export function Game(board: Board = createBoard(100, 100), generation = 0): void {
  if (generation > 10000) {
    return
  }
  print(board);
  setTimeout(Game, 100, nextGeneration(board), generation + 1)
}

export const getNeighbours = (b: Board, x: number, y: number): number => [-1, 0, 1]
  .map(n => [
    getCell(b, (x + n), (y - 1)),
    n === 0 ? false : getCell(b, (x + n), y),
    getCell(b, (x + n), (y + 1))
  ])
  .reduce((acc, n) => [...acc, ...n], [])
  .filter(n => !!n).length;

export const nextGeneration = (b: Board): Board =>
  b.map((row: Cell[], x) => row.map((c: Cell, y) =>
    c.next(getNeighbours(b, x, y)))
  );

export default Game;