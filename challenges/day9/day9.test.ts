import { findFirstInvalid } from './findFirstInvalid';
import { findContiguousRange } from './findContiguousRange';

import { parseLinesOfIntegers } from '../../shared/common-parsers';

const sampleInput = `
35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576
`;

describe('findFirstInvalid', () => {
  test('example 1', () => {
    const numbers = parseLinesOfIntegers(sampleInput);
    expect(findFirstInvalid(numbers, 5)).toBe(127);
  });
});

describe('findContiguousRange', () => {
  test('example1', () => {
    const numbers = parseLinesOfIntegers(sampleInput);
    expect(findContiguousRange(numbers, 127)).toEqual([15, 25, 47, 40]);
  });
});
