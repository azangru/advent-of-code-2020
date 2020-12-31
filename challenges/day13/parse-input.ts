export const parseInput = (input: string) => {
  const lines = input.split('\n').map(line => line.trim()).filter(Boolean);
  return [
    parseInt(lines[0]),
    lines[1]
  ] as [number, string];
}
