import { World } from './world';

export class SecondWorld extends World {

  update() {
    const newWorld = this.parsedWorld.map((row, rowIndex) => {
      return row.map((seat, columnIndex) => {
        const position = [rowIndex, columnIndex] as const;
        const visibleSeats = [
          this.getFirstVisibleSeat(position, -1, -1), // NW
          this.getFirstVisibleSeat(position, 0, -1), // N
          this.getFirstVisibleSeat(position, 1, -1), // NE
          this.getFirstVisibleSeat(position, 1, 0), // E
          this.getFirstVisibleSeat(position, 1, 1), // SE
          this.getFirstVisibleSeat(position, 0, 1), // S
          this.getFirstVisibleSeat(position, -1, 1), // SW
          this.getFirstVisibleSeat(position, -1, 0), // W
        ];

        const numberOfOccupiedVisibleSeats = visibleSeats.reduce((acc, seat) => {
          return seat === '#' ? acc + 1 : acc;
        }, 0);

        if (seat === 'L' && numberOfOccupiedVisibleSeats === 0) {
          return '#';
        } else if (seat === '#' && numberOfOccupiedVisibleSeats >= 5) {
          return 'L';
        } else {
          return seat;
        }
      });
    });

    this.parsedWorld = newWorld;
  }

  getFirstVisibleSeat(
    currentPosition: readonly [number, number],
    rowDirection: number,
    columnDirection: number
  ) {
    let [x, y] = currentPosition;

    x = x + rowDirection;
    y = y + columnDirection;

    while (this.isWithinBounds(x, y)) {
      const lookup = this.parsedWorld[x][y];
      if (lookup === 'L' || lookup === '#') {
        return lookup;
      }

      x = x + rowDirection;
      y = y + columnDirection;
    }
  }

  isWithinBounds(x: number, y: number) {
    return x >= 0
      && x < this.parsedWorld.length
      && y >= 0
      && y < this.parsedWorld[0].length;
  }

}
