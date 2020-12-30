import path from 'path';

import { readFile } from '../../shared/file-reader';

import { Ship } from './ship';

const input = readFile(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  const ship = new Ship(input);
  ship.sail();

  return ship.getManhattanDistanceFromOrigin();
};

console.log('solution to part 1 of day 12 is:', solvePart1());
