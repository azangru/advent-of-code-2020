import { permutate } from '../day1/permutate';

type Validator1Params = {
  list: number[];
  currentIndex: number;
  preambleLength: number;
};

export const isValid1 = (params: Validator1Params) => {
  const { list, currentIndex, preambleLength } = params;
  const currentNumber = list[currentIndex];
  const preamble = list.slice(currentIndex - preambleLength, currentIndex);
  const permutations = permutate(preamble, 2);
  return permutations.some(([a, b]) => a + b === currentNumber);
};
