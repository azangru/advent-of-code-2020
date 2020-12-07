import path from 'path';

import { Traverser } from './traverser';

import { readLines } from '../../shared/file-reader';

const input = readLines(path.resolve(__dirname, 'input.txt'));

const solvePart1 = () => {
  const traverser = new Traverser(input);
  traverser.traverse();
  return traverser.getTrees();
};

const solvePart2 = () => {
  const traverser1 = new Traverser(input, { right: 1, down: 1 });
  traverser1.traverse();

  const traverser2 = new Traverser(input, { right: 3, down: 1 });
  traverser2.traverse();

  const traverser3 = new Traverser(input, { right: 5, down: 1 });
  traverser3.traverse();

  const traverser4 = new Traverser(input, { right: 7, down: 1 });
  traverser4.traverse();

  const traverser5 = new Traverser(input, { right: 1, down: 2 });
  traverser5.traverse();

  return traverser1.getTrees() *
         traverser2.getTrees() *
         traverser3.getTrees() *
         traverser4.getTrees() *
         traverser5.getTrees();
};

console.log('Solution to part 1 of day 3 is:', solvePart1());
console.log('Solution to part 2 of day 3 is:', solvePart2());
