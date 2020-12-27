import path from 'path';

import { readFile } from '../../shared/file-reader';
import { parseLinesOfIntegers } from '../../shared/common-parsers';

import { findFirstInvalid } from './findFirstInvalid';
import { findContiguousRange } from './findContiguousRange';

const input = readFile(path.resolve(__dirname, 'input.txt'));
const parsedInput = parseLinesOfIntegers(input);

const solvePart1 = () => {
  const preambleLength = 25;
  return findFirstInvalid(parsedInput, preambleLength);
};

const solvePart2 = () => {
  const preambleLength = 25;
  const firstInvalidNumber = findFirstInvalid(parsedInput, preambleLength) as number;
  const range = findContiguousRange(parsedInput, firstInvalidNumber) as number[];
  const smallestNumber = Math.min(...range);
  const largestNumber = Math.max(...range);
  return smallestNumber + largestNumber;
};

console.log('solution for part 1 of day 9 is:', solvePart1());
console.log('solution for part 2 of day 9 is:', solvePart2());
