import { Instruction, Computer } from './computer';

export const fixProgram = (instructions: Instruction[]) => {
  let computer: Computer | null = null;

  for (let i = 0; i < instructions.length; i++) {
    switchInstruction(instructions, i);
    computer = new Computer(instructions);
    computer.execute();

    if (computer.hasCompleted()) {
      break;
    } else {
      switchInstruction(instructions, i); // switch the instructions back and try again
    }
  }

  return computer?.getAccumulator();
};

const switchInstruction = (instructions: Instruction[], index: number) => {
  // mutate the passed instructions for speed
  const currentInstruction = instructions[index];
  const currentInstructionName = currentInstruction[0];

  if (currentInstructionName === 'nop') {
    currentInstruction[0] = 'jmp';
  } else if (currentInstructionName === 'jmp') {
    currentInstruction[0] = 'nop';
  }
};
