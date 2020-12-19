import { BoardingPass } from './types';

const MIN_ROW = 0;
const MAX_ROW = 127;
const MIN_COLUMN = 0;
const MAX_COLUMN =7;

export const findSeatId = (input: BoardingPass) => {
  const row = findRow(input) as number;
  const column = findColumn(input) as number;
  return row * 8 + column; 
}

export const findRow = (input: BoardingPass) => {
  let lowerLimit = MIN_ROW;
  let upperLimit = MAX_ROW;

  for(let i = 0; i < 7; i++) {
    const instruction = input[i];
    const middle = getMiddle(lowerLimit, upperLimit);

    if (instruction === 'F') {
      upperLimit = upperLimit - middle;
      if (i === 6) {
        return upperLimit;
      }
    } else if (instruction === 'B') {
      lowerLimit = lowerLimit + middle;
      if (i === 6) {
        return lowerLimit;
      }
    }
  }
};

export const findColumn = (input: BoardingPass) => {
  const leftOffset = 7;
  let lowerLimit = MIN_COLUMN;
  let upperLimit = MAX_COLUMN;

  for(let i = 0; i < 3; i++) {
    const instruction = input[leftOffset + i];
    const middle = getMiddle(lowerLimit, upperLimit);

    if (instruction === 'L') {
      upperLimit = upperLimit - middle;
      if (i === 2) {
        return upperLimit;
      }
    } else if (instruction === 'R') {
      lowerLimit = lowerLimit + middle;
      if (i === 2) {
        return lowerLimit;
      }
    }
  }
};

const getSeatId = () => {

};

const getMiddle = (lowerBound: number, upperBound: number) => {
  const difference = upperBound - lowerBound;
  return Math.ceil(difference / 2);
};
