import { parseInput } from './parse-input';

export const countLetterEncounters = (text: string, letter: string) => {
  let count = 0;

  for (let character of text) {
    if (character === letter) {
      count++;
    }
  }

  return count;
};

export const isValidPassword = (input: string) => {
  const {
    firstNumber: minLetterEncounters,
    secondNumber: maxLetterEncounters,
    letter,
    text
  } = parseInput(input);

  let letterCount = text.split('').reduce((count, currentLetter) => {
    return currentLetter === letter ? count + 1 : count;
  }, 0);

  return letterCount >= minLetterEncounters && letterCount <= maxLetterEncounters;
};

export const isValidPassword2 = (input: string) => {
  const {
    firstNumber,
    secondNumber,
    letter,
    text
  } = parseInput(input);

  const firstIndex = firstNumber - 1;
  const secondIndex = secondNumber - 1;

  const firstLetterMatch = text[firstIndex] === letter ? 1 : 0;
  const secondLetterMatch = text[secondIndex] === letter ? 1 : 0;

  return firstLetterMatch + secondLetterMatch === 1;
};
