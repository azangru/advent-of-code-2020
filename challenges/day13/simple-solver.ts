import { parseInput } from "./parse-input";

export const simpleSolver = (input: string) => {
  const [ timestamp, secondLine ] = parseInput(input);
  const intervals = secondLine
    .split(',')
    .filter(item => /\d/.test(item))
    .map(number => parseInt(number));

  return intervals.reduce((acc, interval): [unknown, number] => {
    const [, remainingTime] = acc;
    const divisor = Math.ceil(timestamp / interval);
    const currentRemainingTime = interval * divisor - timestamp;
    if (currentRemainingTime < remainingTime) {
      return [interval, currentRemainingTime]
    } else {
      return acc;
    }
  }, [null, Infinity] as [unknown, number]);
};
