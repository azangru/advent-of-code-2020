import { simpleSolver } from './simple-solver';
import { part2Solver } from './part2-solver-better';

const input = `
1002632
23,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,829,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,x,677,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19
`;

const solvePart1 = () => {
  const [ id, remainingTime ] = simpleSolver(input);
  return (id as number) * remainingTime;
};

const solvePart2 = () => {
  const timetable = input.trim().split('\n')[1];
  return part2Solver(timetable);
};

console.log('solution for part 1 of day 13 is: ', solvePart1());
console.log('solution for part 2 of day 13 is: ', solvePart2());
