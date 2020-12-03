import { permutate } from './permutate';

export const findPair = (input: number[]) => {
  const pairs = permutate(input, 2);
  for (let pair of pairs) {
    const [first, second] = pair;
    if (first + second === 2020) {
      return [first, second];
    }
  }
}

export const findTriplet = (input: number[]) => {
  const triplets = permutate(input, 3);
  for (let triplet of triplets) {
    const [first, second, third] = triplet;
    if (first + second + third === 2020) {
      return [first, second, third];
    }
  }
}
