import path from 'path';

import { findPair } from './find-pair';
import { readLinesAsNumbers } from '../../shared/file-reader';

const pathToFile = path.resolve(__dirname, './input.txt');
const parsedInput = readLinesAsNumbers(pathToFile);

const solvePart1 = () => {
  const [first, second] = findPair(parsedInput) as number[];
  return first * second;
};

console.log('solution to day 1 part 1 is', solvePart1());
