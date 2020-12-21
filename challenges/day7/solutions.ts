import fs from 'fs';
import path from 'path';

import { countCarrierBagsForShinyGoldBag } from './count-bags';

const fileContent = fs.readFileSync(path.resolve(__dirname, 'input.txt'), { encoding: 'utf8' });

const solvePart1 = () => {
  return countCarrierBagsForShinyGoldBag(fileContent);
};

console.log('Solution to part 1 of day 7 is:', solvePart1());
