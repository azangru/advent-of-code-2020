import path from 'path';

import { parseInput } from './parse-input';
import { Computer } from './computer';
import { fixProgram } from './fixProgram';

import { readFile } from '../../shared/file-reader';

const input = readFile(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  const instructions = parseInput(input);
  const computer = new Computer(instructions);
  computer.execute();

  return computer.getAccumulator();
};

const solvePart2 = () => {
  const instructions = parseInput(input);
  return fixProgram(instructions);
};

console.log('solution to part 1 of day 8 is:', solvePart1());
console.log('solution to part 2 of day 8 is:', solvePart2());
