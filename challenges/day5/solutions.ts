import path from 'path';

import { findSeatId } from './seat-finder';
import { BoardingPass } from './types';

import { readLines } from '../../shared/file-reader';

const input = readLines(path.resolve(__dirname, 'input.txt')) as BoardingPass[];

const solvePart1 = () => {
  const seatIds = input.map(boardingPass => findSeatId(boardingPass));
  return Math.max(...seatIds);
};

const solvePart2 = () => {
  const seatIds = input.map(boardingPass => findSeatId(boardingPass));
  seatIds.sort();
  const seatIdBeforeMissing = seatIds.find((id, index) => {
    return seatIds[index + 1] - id === 2;
  }) as number;
  return seatIdBeforeMissing + 1;
};

console.log('Solution to part 1 of day 5 is: ', solvePart1());
console.log('Solution to part 2 of day 5 is: ', solvePart2());
