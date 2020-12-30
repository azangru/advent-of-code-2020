import path from 'path';

import { readFile } from '../../shared/file-reader';

import { World, getStableWorld } from './world';

const input = readFile(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  const world = new World(input);
  getStableWorld(world);
  return world.countOccupiedSeats();
};

console.log('Solution to part 1 of day 11 is: ', solvePart1());
