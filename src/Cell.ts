import { Cell } from "./types";

export function CellFactory(isAlive: boolean = Math.random() > 0.5): Cell {
  return {
    value: isAlive,
    next: (neighbours: number): Cell => {
      if ((neighbours < 2 || neighbours > 3) && isAlive) {
        return CellFactory(false);
      }
      if (neighbours === 3 && !isAlive) {
        return CellFactory(true);
      }
      return CellFactory(isAlive);
    }
  };
}