/**
  Example input:

 1-3 a: abcde
 1-3 b: cdefg
 2-9 c: ccccccccc

 */

export type Data = {
  firstNumber: number;
  secondNumber: number;
  letter: string;
  text: string;
};

// takes a line of input and parses it
export const parseInput = (input: string): Data => {
  const regex = /(\d+)-(\d+) (.{1}): (.*)$/;
  const [, minLetterEncounters, maxLetterEncounters, letter, text] = regex.exec(input) as RegExpExecArray;
  return {
    firstNumber: parseInt(minLetterEncounters),
    secondNumber: parseInt(maxLetterEncounters),
    letter,
    text
  };
}
