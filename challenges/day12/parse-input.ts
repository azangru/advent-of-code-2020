export const parseInput = (input: string) => {
  return input
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const regex = /(\w)(\d+)/;
      const match = regex.exec(line) as RegExpMatchArray;
      const [, action, units] = match;
      return { action, units: parseInt(units) };
    })
};
