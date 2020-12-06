import path from 'path';

import { isValidPassword, isValidPassword2 } from './validate-text';

import { readLines } from '../../shared/file-reader';

const pathToFile = path.resolve(__dirname, './input.txt');
const allPasswords = readLines(pathToFile);

const solvePart1 = () => {
  return allPasswords.filter(password => isValidPassword(password)).length;
};

const solvePart2 = () => {
  return allPasswords.filter(password => isValidPassword2(password)).length;
};


console.log('Solution for part 1 of day 1 is', solvePart1());
console.log('Solution for part 1 of day 1 is', solvePart2());
