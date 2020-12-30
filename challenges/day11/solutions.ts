import path from 'path';

import { readFile } from '../../shared/file-reader';

import { World, getStableWorld } from './world';
import { SecondWorld } from './second-world';

const input = readFile(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  const world = new World(input);
  getStableWorld(world);
  return world.countOccupiedSeats();
};

const solvePart2 = () => {
  const world = new SecondWorld(input);
  getStableWorld(world);
  return world.countOccupiedSeats();
};

console.log('Solution to part 1 of day 11 is: ', solvePart1());
console.log('Solution to part 2 of day 11 is: ', solvePart2());
