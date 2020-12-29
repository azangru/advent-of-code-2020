import path from 'path';

import { readFile } from '../../shared/file-reader';
import { parseLinesOfIntegers } from '../../shared/common-parsers';

import { buildChain, getDifferences } from './buildChain';
import { Graph } from './graph';

const input = readFile(path.resolve(__dirname, 'input.txt'));
const parsedInput = parseLinesOfIntegers(input);

const solvePart1 = () => {
  const clonedInput = [...parsedInput]; // getDifferences mutates the input
  const differences = getDifferences(clonedInput);
  return (differences.get(1) as number) * (differences.get(3) as number);
};

const solvePart2 = () => {
  const sequence = buildChain(parsedInput);
  const graph = new Graph(sequence);
  return graph.countPaths();
};

console.log('solution for part 1 of day 10 is:', solvePart1());
console.log('solution for part 2 of day 10 is:', solvePart2());
