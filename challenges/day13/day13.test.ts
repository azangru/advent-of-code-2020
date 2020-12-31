import { simpleSolver } from './simple-solver';


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
