type InstructionName = 'nop' | 'jmp' | 'acc';

export type Instruction = [InstructionName, number];

export class Computer {

  private executedPointers = new Set<number>()

  private accumulator: number = 0;
  private pointer: number = 0;
  private hasTerminated: boolean = false;

  constructor(private instructions: Instruction[]) {}

  execute() {
    if (this.executedPointers.has(this.pointer)) {
      return;
    }
    this.executedPointers.add(this.pointer);
    this.executeInstruction(this.instructions[this.pointer]);

    if (this.pointer < this.instructions.length) {
      this.execute();
    } else {
      this.hasTerminated = true;
    }

  }

  getAccumulator() {
    return this.accumulator;
  }

  hasCompleted() {
    return this.hasTerminated;
  }

  executeInstruction(instruction: Instruction) {
    const [ name ] = instruction;

    if (name === 'acc') {
      this.addToAccumulator(instruction);
    } else if (name === 'jmp') {
      this.jump(instruction);
    } else if (name === 'nop') {
      this.doNothing();
    }
  }

  addToAccumulator(instruction: Instruction) {
    const [, parameter] = instruction;
    this.accumulator = this.accumulator + parameter;
    this.pointer = this.pointer + 1;
  }

  jump(instruction: Instruction) {
    const [, parameter] = instruction;
    this.pointer = this.pointer + parameter;
  }

  doNothing() {
    this.pointer = this.pointer + 1;
  }

}
