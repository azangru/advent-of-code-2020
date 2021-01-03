import { parseInput, Instruction } from './parse-input';

export class Computer {

  private instructions: Instruction[];
  private mask: string = '';

  private memory: Map<number, number> = new Map();

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
    const binaryAddress = address.toString(2).padStart(36, '0');
    const maskedAddress = this.applyMask(binaryAddress);
    const allAddresses = this.getAllAddresses(maskedAddress)
      .map(address => parseInt(address, 2));
    allAddresses.forEach(address => this.memory.set(address, value));
  }

  applyMask(value: string) {
    const digits = value.split('');
    for (let i = 0; i < digits.length; i++) {
      if (this.mask[i] === '1') {
        digits[i] = '1';
      } else if (this.mask[i] === 'X') {
        digits[i] = 'X';
      }
    }
    return digits.join('');
  }

  getAllAddresses(str: string): string[] {
    return str.split('').reduce((acc, char): string[] => {
      const currentDigits = char === 'X' ? ['0', '1'] : [char];

      if (!acc.length) {
        return currentDigits;
      } else {
        return acc.flatMap(str => currentDigits.map(digit => str + digit))
      }
    }, [] as string[]);
  }

  getMemoryValuesSum() {
    return [...this.memory.entries()].reduce((acc, [, value]): number => {
      return acc + value;
    }, 0)
  }

}
