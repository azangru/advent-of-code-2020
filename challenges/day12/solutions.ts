import path from 'path';

import { readFile } from '../../shared/file-reader';

import { Ship, SecondShip } from './ship';

const input = readFile(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  const ship = new Ship(input);
  ship.sail();

  return ship.getManhattanDistanceFromOrigin();
};

const solvePart2 = () => {
  const ship = new SecondShip(input);
  ship.sail();

  return ship.getManhattanDistanceFromOrigin();
};

console.log('solution to part 1 of day 12 is:', solvePart1());
console.log('solution to part 2 of day 12 is:', solvePart2());
