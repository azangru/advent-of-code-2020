export const parseInput = (input: string) => {
  return input
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split(''));
};
