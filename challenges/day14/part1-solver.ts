import { parseInput, Instruction } from './parse-input';

export class Computer {

  private instructions: Instruction[];
  private mask: string = '';

  private memory: Map<number, string> = new Map();

  constructor(input: string) {
    this.instructions = parseInput(input);
  }

  run() {
    this.instructions.forEach(instruction => {
      if (instruction.type === 'mask') {
        this.setMask(instruction.mask);
      } else if (instruction.type === 'mem') {
        this.writeToMemory(instruction.address, instruction.value);
      }
    });
  }

  setMask(mask: string) {
    this.mask = mask;
  }

  writeToMemory(address: number, value: number) {
    const binaryValue = value.toString(2).padStart(36, '0');
    const maskedValue = this.applyMask(binaryValue);
    this.memory.set(address, maskedValue);
  }

  applyMask(value: string) {
    const digits = value.split('');
    for (let i = 0; i < digits.length; i++) {
      if (/\d/.test(this.mask[i])) {
        digits[i] = this.mask[i];
      }
    }
    return digits.join('');
  }

  getMemoryValuesSum() {
    return [...this.memory.entries()].reduce((acc, [, value]): number => {
      return acc + parseInt(value, 2);
    }, 0)
  }

}
