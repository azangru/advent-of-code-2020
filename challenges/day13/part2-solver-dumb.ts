/*

First attempt — do simple iteration using the largest bus number.
Passes the tests, but isn't fast enough to get to the answer.

*/


export const part2Solver = (input: string) => {
  const intervalsMap = parseIntervals(input);
  const sortedIntervals = sortIntervals(intervalsMap);

  let [largestInterval, offset] = getLast(sortedIntervals);
  let guess = largestInterval - offset;

  while(!check(sortedIntervals, guess)) {
    guess = nextGuess(sortedIntervals, guess);
  }

  return guess;
}

const sortIntervals = (intervalsMap: Map<number, number>) => {
  const [...entries] = intervalsMap.entries();
  entries.sort((a, b) => {
    return a[0] - b[0];
  });
  return entries;
}

const nextGuess = (intervals: [number, number][], currentGuess: number) => {
  const [largestInterval, offset] = getLast(intervals);
  const currentGuessForLargestInterval = currentGuess + offset;
  const coefficient = currentGuessForLargestInterval / largestInterval;
  return largestInterval * (coefficient + 1) - offset;
};

const getLast = (intervals: [number, number][]) =>
  intervals[intervals.length - 1];

const check = (intervals: [number, number][], guess: number) => {
  for (let i = 0; i < intervals.length - 1; i++) {
    const [interval, offset] = intervals[i];
    const target = guess + offset;
    if (target % interval !== 0) {
      return  false;
    }
  }
  return true;
};

const parseIntervals = (line: string) => {
  return line
    .split(',')
    .map(item => {
      if (/\d/.test(item)) {
        return parseInt(item);
      }
    })
    .reduce((acc, item, index) => {
      if (typeof item === 'number') {
        acc.set(item, index);
      }
      return acc;
    }, new Map());
}
