import { parseInput, Data } from './parse-input';

export const countLetterEncounters = (text: string, letter: string) => {
  let count = 0;

  for (let character of text) {
    if (character === letter) {
      count++;
    }
  }

  return count;
};

