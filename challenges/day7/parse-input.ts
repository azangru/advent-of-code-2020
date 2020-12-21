import { Bag } from './bag';

export const parseInput = (input: string) => {
  return input.split('\n').filter(Boolean).map(parseLine);
};

const parseLine = (line: string) => {
  const bag = buildParentBag(line);
  bag.children = buildChildBags(line);
  return bag;
};

const buildParentBag = (line: string) => {
  const regex = /(.+) bags contain/;
  const description = (regex.exec(line) as RegExpExecArray)[1];
  return new Bag(description);
};

const buildChildBags = (line: string) => {
  const combinedChildBagsString = (/contain (.+)\./.exec(line) as RegExpExecArray)[1];
  return combinedChildBagsString
    .split(', ')
    .filter(str => /\d .+ bag/.test(str))
    .map(str => {
      const match = (/(\d+) (.+) bag/.exec(str) as RegExpExecArray);
      const quantity = parseInt(match[1]);
      const description = match[2];
      return new Bag(description, quantity);
    });
};
