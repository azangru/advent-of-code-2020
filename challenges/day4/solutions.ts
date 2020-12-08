import fs from 'fs';
import path from 'path';

import { splitDocuments } from './parse-input';
import { isValid1 } from './validators';

const fileContent = fs.readFileSync(path.resolve(__dirname, 'input.txt'), { encoding: 'utf8' });

const solvePart1 = () => {
  const documents = splitDocuments(fileContent);

  return documents.reduce((acc, document) => {
    const score = isValid1(document) ? 1 : 0;
    return acc + score;
  }, 0);
};

console.log('Solution to part 1 of day 3 is:', solvePart1());
