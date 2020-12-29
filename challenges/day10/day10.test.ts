import {
  buildChain,
  getDifferences
} from './buildChain';
import { Graph } from './graph';

import { parseLinesOfIntegers } from '../../shared/common-parsers';

const example1 = `
16
10
15
5
1
11
7
19
6
12
4`;

const example2 = `
28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

describe('getDifferences', () => {

  test('example1', () => {
    const numbers = parseLinesOfIntegers(example1);
    const differences = getDifferences(numbers);
    expect(differences.get(1)).toBe(7);
    expect(differences.get(3)).toBe(5);
  });

  test('example 2', () => {
    const numbers = parseLinesOfIntegers(example2);
    const differences = getDifferences(numbers);
    expect(differences.get(1)).toBe(22);
    expect(differences.get(3)).toBe(10);
  });

});

describe('graph', () => {

  test('example 1', () => {
    const numbers = parseLinesOfIntegers(example1);
    const sequence = buildChain(numbers);
    const graph = new Graph(sequence);
    expect(graph.countPaths()).toBe(8);
  });

  test('example 2', () => {
    const numbers = parseLinesOfIntegers(example2);
    const sequence = buildChain(numbers);
    const graph = new Graph(sequence);
    expect(graph.countPaths()).toBe(19208);
  });

});
