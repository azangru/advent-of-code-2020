import { parseInput } from './parse-input';

export const solve1 = (input: string) => {
  const { rules, nearbyTickets } = parseInput(input);
  const validIntervals = rules.reduce((acc, rule): number[][][] => {
    return [...acc, [rule.firstInterval, rule.secondInterval]];
  }, [] as number[][][]);

  const invalidNumbers = nearbyTickets.reduce((acc, line) => {
    const invalidNumbers = line.filter(number => {
      const validForSome = validIntervals.some(([interval1, interval2]) => {
        return (number >= interval1[0] && number <= interval1[1]) ||
              (number >= interval2[0] && number <= interval2[1])
      });
      return !validForSome;
    });
    return [...acc, ...invalidNumbers];
  }, [] as number[]);

  return invalidNumbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
};
