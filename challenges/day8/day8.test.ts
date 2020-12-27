import { parseInput } from './parse-input';
import { Computer } from './computer';

import { fixProgram } from './fixProgram';

const sampleInput = `
nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
`;

describe('computer', () => {

  test('example 1', () => {
    const instructions = parseInput(sampleInput);
    const computer = new Computer(instructions);
    computer.execute();

    expect(computer.getAccumulator()).toBe(5);
  });

});

describe('fixProgram', () => {

  test('example 1', () => {
    const instructions = parseInput(sampleInput);

    expect(fixProgram(instructions)).toBe(8);
  });

})
