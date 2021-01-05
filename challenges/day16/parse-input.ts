export const parseInput = (input: string) => {
  const groups = splitIntoGroups(input.trim());
  const rules = parseFirstGroup(groups[0]);
  const myTicket = parseSecondGroup(groups[1]);
  const nearbyTickets = parseThirdGroup(groups[2]);
  return { rules, myTicket, nearbyTickets };
};

const splitIntoGroups = (input: string) => {
  return input.split(/\n\s*\n/);
};

const parseFirstGroup = (input: string) => {
  const regex = /(.+): (\d+)-(\d+) or (\d+)-(\d+)/;

  return input.split('\n').map(line => {
    const match = regex.exec(line) as RegExpMatchArray;
    return {
      fieldName: match[1],
      firstInterval: [parseInt(match[2]), parseInt(match[3])],
      secondInterval: [parseInt(match[4]), parseInt(match[5])]
    }
  });
};

const parseSecondGroup = (input: string) => {
  return parseListOfNumbers(input.split('\n')[1]);
};

const parseThirdGroup = (input: string) => {
  const lines = input.split('\n');
  lines.shift();
  return lines.map(parseListOfNumbers);
};

const parseListOfNumbers = (input: string) => {
  return input.split(',').map(str => parseInt(str));
}
