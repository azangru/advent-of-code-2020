import fs from 'fs';
import path from 'path';

import {
  countCarrierBagsForShinyGoldBag,
  countContainedBagsForShinyGoldBag
} from './count-bags';

const fileContent = fs.readFileSync(path.resolve(__dirname, 'input.txt'), { encoding: 'utf8' });

const solvePart1 = () => {
  return countCarrierBagsForShinyGoldBag(fileContent);
};

const solvePart2 = () => {
  return countContainedBagsForShinyGoldBag(fileContent);
};

console.log('Solution to part 1 of day 7 is:', solvePart1());
console.log('Solution to part 2 of day 7 is:', solvePart2());
