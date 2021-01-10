import path from 'path';

import { readFile } from '../../shared/file-reader';

import { solve1 } from './part1-solver';
import { solve2 } from './part2-solver';

const input = readFile(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  return solve1(input);
};

const solvePart2 = () => {
  return solve2(input);
};

console.log('Solution to part 1 of day 16 is', solvePart1());
console.log('Solution to part 2 of day 16 is', solvePart2());
