export const splitIntoGroups = (input: string) => {
  return input.trim().split('\n\n');
};

export const splitIntoItems = (input: string) => {
  return input.split('\n');
};
