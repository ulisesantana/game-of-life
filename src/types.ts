export type Cell = {
  value: boolean,
  next: (neigbours: number) => Cell
};

export type Board = Cell[][]; 