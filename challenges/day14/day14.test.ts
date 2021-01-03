import dedent from 'ts-dedent';

import { Computer as Computer1 } from './part1-solver';
import { Computer as Computer2 } from './part2-solver';

describe('solve part 1', () => {

  const example = dedent`
    mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
    mem[8] = 11
    mem[7] = 101
    mem[8] = 0
  `;

  test('example', () => {
    const computer = new Computer1(example);
    computer.run();
    expect(computer.getMemoryValuesSum()).toBe(165);
  });

});

describe('solve part 2', () => {

  const example = dedent`
    mask = 000000000000000000000000000000X1001X
    mem[42] = 100
    mask = 00000000000000000000000000000000X0XX
    mem[26] = 1
  `;

  test('example', () => {
    const computer = new Computer2(example);
    computer.run();
    expect(computer.getMemoryValuesSum()).toBe(208);
  });

});
