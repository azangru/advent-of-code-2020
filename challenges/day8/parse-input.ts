import { Instruction } from './computer';

export const parseInput = (input: string): Instruction[] => {
  return splitIntoLines(input).map(parseInstruction);
};

const splitIntoLines = (input: string) => {
  return input.split('\n').map(line => line.trim()).filter(Boolean);
};

const parseInstruction = (line: string) => {
  const instructionRegex = /^(.+) /;
  const parameterRegex = /((\+|-)\d+)$/;

  const instruction = (instructionRegex.exec(line) as RegExpExecArray)[1];
  const parameter = parseInt((parameterRegex.exec(line) as RegExpExecArray)[1]);
  return [instruction, parameter] as Instruction;
};
