import { Bag } from './bag';
import { parseInput } from './parse-input';

export const countCarrierBagsForShinyGoldBag = (input: string) => {
  const bags = parseInput(input);
  return countCarrierBags(bags, 'shiny gold').size;
};

const countCarrierBags = (bags: Bag[], description: string, matches: Set<string> = new Set()): Set<string> => {
  const immediateCarriers = bags.filter(bag => {
    return bag.children.some(childBag => childBag.description === description)
  });

  return immediateCarriers.reduce((matches, bag) => {
    matches.add(bag.description);
    return new Set([...matches, ...countCarrierBags(bags, bag.description)]);
  }, matches);
};
