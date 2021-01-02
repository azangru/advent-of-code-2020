import dedent from 'ts-dedent';

import { Computer as Computer1 } from './part1-solver';

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
