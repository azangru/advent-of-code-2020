import path from 'path';

import { readFile } from '../../shared/file-reader';
import { parseLinesOfIntegers } from '../../shared/common-parsers';

import { getDifferences } from './buildChain';

const input = readFile(path.resolve(__dirname, 'input.txt'));
const parsedInput = parseLinesOfIntegers(input);

const solvePart1 = () => {
  const clonedInput = [...parsedInput]; // getDifferences mutates the input
  const differences = getDifferences(clonedInput);
  return (differences.get(1) as number) * (differences.get(3) as number);
};

console.log('solution for part 1 of day 10 is:', solvePart1());
