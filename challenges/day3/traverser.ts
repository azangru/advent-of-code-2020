import { parseMap } from './parse-map';

type Options = {
  right: number;
  down: number;
}

export class Traverser {

  private parsedMap: (1|0)[][] = [];

  private right = 3;
  private down = 1;

  private trees = 0;

  constructor(map: string[], options?: Options) {
    this.parsedMap = parseMap(map);
    if (options) {
      this.right = options.right;
      this.down = options.down;
    }
  }

  traverse() {
    const traverseSteps = Math.floor(this.parsedMap.length / this.down);

    for (let step = 0; step < traverseSteps; step++) {
      const rowIndex = step * this.down;
      const columnIndex = step * this.right;
      const row = this.buildSufficientlyLongRow(this.parsedMap[rowIndex], columnIndex);
      if (row[columnIndex] === 1) {
        this.trees += 1;
      }      
    }
  }

  buildSufficientlyLongRow = (row: (1|0)[], column: number) => {
    if (row.length - 1 >= column) {
      return row;
    } else {
      const times = Math.floor(column / (row.length - 1)) + 1;
      return [...Array(times)].flatMap(() => row);
    }
  }

  getTrees() {
    return this.trees;
  }

}
