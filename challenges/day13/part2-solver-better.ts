/*
Go through the buses one after the other. Find when the second bus, with its given offet,
is in correct position relative to the first bus, then multiply the period of the first bus by
the period of the second to get the periodicity of when they both are in the required arrangement
relative to one another, and with this new period proceed to the next bus.

I guess it helps that the buses don't have common divisors.

Took a hint about the algorithm from uncle Bob
*/


export const part2Solver = (input: string) => {
  const intervalsMap = parseIntervals(input);
  const entries = [...intervalsMap.entries()];

  let [period, startFrom] = entries[0];

  for (let i = 1; i < entries.length; i++) {
    const [interval, offset] = entries[i];
    const result = getPeriod(period, interval, offset, startFrom);
    period = result.period;
    startFrom = result.startFrom;
  }

  return startFrom;
};

const getPeriod = (left: number, right: number, offset: number, startFrom: number) => {
  let coefficient = 1;
  let guess = startFrom + left * coefficient + offset;

  while (guess % right !== 0) {
    coefficient++;
    guess = startFrom + left * coefficient + offset;
  }

  return { period: left * right, startFrom: guess - offset };
};

const parseIntervals = (line: string): Map<number, number> => {
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
};
