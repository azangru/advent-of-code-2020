export const getDifferences = (numbers: number[]) => {
  numbers.sort((a, b) => a - b);
  const lastNumber = numbers[numbers.length - 1] + 3;
  numbers.push(lastNumber);
  numbers.unshift(0);

  const result = new Map([[1, 0], [2, 0], [3, 0]]);
  return numbers.reduce((acc, number, index): typeof result => {
    if (index > 0) {
      const difference = number - numbers[index -1];
      acc.set(difference, acc.get(difference) as number + 1);
    }
    return acc;
  }, result);
};
