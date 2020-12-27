import path from 'path';

import { readFile } from '../../shared/file-reader';
import { parseLinesOfIntegers } from '../../shared/common-parsers';

import { findFirstInvalid } from './findFirstInvalid';

const input = readFile(path.resolve(__dirname, 'input.txt'));
const parsedInput = parseLinesOfIntegers(input);

const solvePart1 = () => {
  const preambleLength = 25;
  return findFirstInvalid(parsedInput, preambleLength);
}

console.log('solution for part 1 of day 9 is:', solvePart1());
