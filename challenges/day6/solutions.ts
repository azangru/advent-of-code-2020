import fs from 'fs';
import path from 'path';

import {
  countAllDistinctAnswers,
  countAllCommonAnswers
} from './count';

const fileContent = fs.readFileSync(path.resolve(__dirname, 'input.txt'), { encoding: 'utf8' });

const solvePart1 = () => {
  return countAllDistinctAnswers(fileContent);
};

const solvePart2 = () => {
  return countAllCommonAnswers(fileContent);
};

console.log('Solution to part 1 of day 6 is:', solvePart1());
console.log('Solution to part 2 of day 6 is:', solvePart2());
