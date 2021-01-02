import path from 'path';

import { readFile } from '../../shared/file-reader';

import { Computer as Computer1 } from './part1-solver';

const input = readFile(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  const computer = new Computer1(input);
  computer.run();
  return computer.getMemoryValuesSum();
}

console.log('solution for part 1 of day 14 is:', solvePart1());
