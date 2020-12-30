import { parseInput } from './parse-input';

export class World {

  protected parsedWorld: string[][]

  constructor(input: string) {
    this.parsedWorld = parseInput(input);
  }

  toString() {
    return this.parsedWorld.map(row => row.join('')).join('\n');
  }

  update() {
    const newWorld = this.parsedWorld.map((row, rowIndex) => {
      return row.map((seat, columnIndex) => {
        const adjacentSeats = [
          this.parsedWorld[rowIndex - 1]?.[columnIndex - 1],
          this.parsedWorld[rowIndex - 1]?.[columnIndex],
          this.parsedWorld[rowIndex - 1]?.[columnIndex + 1],
          this.parsedWorld[rowIndex][columnIndex - 1],
          this.parsedWorld[rowIndex][columnIndex + 1],
          this.parsedWorld[rowIndex + 1]?.[columnIndex - 1],
          this.parsedWorld[rowIndex + 1]?.[columnIndex],
          this.parsedWorld[rowIndex + 1]?.[columnIndex + 1],
        ];
        const numberOfOccupiedAdjacentSeats = adjacentSeats.reduce((acc, seat) => {
          return seat === '#' ? acc + 1 : acc;
        }, 0);

        if (seat === 'L' && numberOfOccupiedAdjacentSeats === 0) {
          return '#';
        } else if (seat === '#' && numberOfOccupiedAdjacentSeats >= 4) {
          return 'L';
        } else {
          return seat;
        }
      });
    });
    this.parsedWorld = newWorld;
  }

  countOccupiedSeats() {
    let count = 0;

    for (const row of this.parsedWorld) {
      for (const seat of row) {
        if (seat === '#') {
          count++;
        }
      }
    }

    return count;
  }

}

export const getStableWorld = (world: World) => {
  let lastWorldString = world.toString();

  world.update();

  while( world.toString() !== lastWorldString) {
    lastWorldString = world.toString();
    world.update();
  }

  return world;
};
