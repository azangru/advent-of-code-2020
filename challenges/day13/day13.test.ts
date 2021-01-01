import { simpleSolver } from './simple-solver';
import { part2Solver as part2SolverDumb } from './part2-solver-dumb';

const example = `
939
7,13,x,x,59,x,31,19
`;

describe('simpleSolver', () => {

  test('example 1', () => {
    const solution = simpleSolver(example);
    expect(solution).toEqual([59, 5]);
  });

});

describe.only('part2SolverDumb', () => {

  const example1 = '7,13,x,x,59,x,31,19';
  const example2 = '17,x,13,19';
  const example3 = '67,7,59,61';
  const example4 = '67,x,7,59,61';
  const example5 = '67,7,x,59,61';
  const example6 = '1789,37,47,1889';

  test('example 1', () => {
    expect(part2SolverDumb(example1)).toBe(1068781);
  });

  test('example 2', () => {
    expect(part2SolverDumb(example2)).toBe(3417);
  });

  test('example 3', () => {
    expect(part2SolverDumb(example3)).toBe(754018);
  });

  test('example 4', () => {
    expect(part2SolverDumb(example4)).toBe(779210);
  });

  test('example 5', () => {
    expect(part2SolverDumb(example5)).toBe(1261476);
  });

  test('example 6', () => {
    expect(part2SolverDumb(example6)).toBe(1202161486);
  });

});
