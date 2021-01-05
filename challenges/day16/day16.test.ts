import dedent from 'ts-dedent';

import { solve1 } from './part1-solver';

const example = dedent`
  class: 1-3 or 5-7
  row: 6-11 or 33-44
  seat: 13-40 or 45-50

  your ticket:
  7,1,14

  nearby tickets:
  7,3,47
  40,4,50
  55,2,20
  38,6,12
`;

describe('part 1', () => {

  test('example 1', () => {
    expect(solve1(example)).toBe(71);
  });

});
