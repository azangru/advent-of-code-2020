type MaskInstruction = {
  type: 'mask',
  mask: string;
};

type MemInstruction = {
  type: 'mem',
  address: number,
  value: number
};

export type Instruction = MaskInstruction | MemInstruction;

export const parseInput = (input: string) => {
  const lines = input.split('\n').map(line => line.trim()).filter(Boolean);

  return lines.map(line => {
    if (line.startsWith('mask')) {
      const regex = /mask = (.+)/;
      const match = regex.exec(line) as RegExpMatchArray;
      const mask = match[1];
      return {
        type: 'mask' as const,
        mask
      };
    } else if (line.startsWith('mem[')) {
      const regex = /mem\[(\d+)\] = (\d+)/;
      const match = regex.exec(line) as RegExpMatchArray;
      const address = match[1];
      const value = match[2];
      return {
        type: 'mem' as const,
        address: parseInt(address),
        value: parseInt(value)
      }
    }
  }) as Instruction[];
};
