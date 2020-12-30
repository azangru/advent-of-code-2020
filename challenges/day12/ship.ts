import { parseInput } from './parse-input';

type Instruction = {
  action: Direction | Side | 'F';
  units: number;
};

type Position = {
  x: number;
  y: number;
};

type Direction = 'N' | 'E' | 'S' | 'W';
type Side = 'L' | 'R';

const directions: Direction[] = ['N', 'E', 'S', 'W'];

export class Ship {

  protected instructions: Instruction[]
  protected position: Position = { x: 0, y: 0 }

  protected currentDirection: Direction = 'E'

  constructor(input: string) {
    this.instructions = parseInput(input) as Instruction[];
  }

  sail() {
    this.instructions.forEach(this.executeInstruction);
  }

  executeInstruction = (instruction: Instruction) => {
    const { action, units } = instruction;

    if (directions.includes(action as Direction)) {
      this.move(action as Direction, units);
    } else if (['L', 'R'].includes(action)) {
      this.turn(action as Side, units);
    } else if (action === 'F') {
      this.move(this.currentDirection, units);
    }
  }

  move(direction: Direction, distance: number) {
    if (direction === 'N') {
      this.position.y = this.position.y + distance;
    } else if (direction === 'S') {
      this.position.y = this.position.y - distance;
    } else if (direction === 'E') {
      this.position.x = this.position.x + distance;
    } else if (direction === 'W') {
      this.position.x = this.position.x - distance;
    }
  }

  turn(side: Side, angle: number) {
    const currentDirectionIndex = directions.indexOf(this.currentDirection);
    const rightAngles = angle / 90;
    const multiplyer = side === 'R' ? 1 : -1;
    let newDirectionIndex = (currentDirectionIndex + rightAngles * multiplyer);
    if (newDirectionIndex >= directions.length) {
      newDirectionIndex = newDirectionIndex % directions.length;
    } else if (newDirectionIndex < 0) {
      newDirectionIndex = directions.length + newDirectionIndex;
    }
    const newDirection = directions[newDirectionIndex];
    this.currentDirection = newDirection;
  }

  getManhattanDistanceFromOrigin() {
    const { x, y } = this.position;
    return Math.abs(x) + Math.abs(y);
  }

}
