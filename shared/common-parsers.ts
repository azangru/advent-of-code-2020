export const parseLinesOfIntegers = (input: string) => {
  return input.split('\n')
    .filter(line => /\d/.test(line))
    .map(line => parseInt(line.trim()));
};
