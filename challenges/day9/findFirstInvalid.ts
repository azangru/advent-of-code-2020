import { isValid1 } from './validators';

export const findFirstInvalid = (list: number[], preambleLength: number) => {
  return list.slice(preambleLength).find((_, index) => {
    return !isValid1({
      list,
      currentIndex: index + preambleLength,
      preambleLength
    });
  });
};
