import { Bag } from './bag';
import { parseInput } from './parse-input';

export const countCarrierBagsForShinyGoldBag = (input: string) => {
  const bags = parseInput(input);
  return countCarrierBags(bags, 'shiny gold').size;
};

export const countContainedBagsForShinyGoldBag = (input: string) => {
  const bags = parseInput(input);
  return countContainedBags(bags, 'shiny gold') - 1; // -1 because we aren't counting the shiny gold bag itself
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

const countContainedBags = (bags: Bag[], description: string): number => {
  const carrierBag = bags.find(bag => bag.description === description) as Bag;

  if (!carrierBag.children.length) {
    return 1;
  } else {
    return 1 + carrierBag.children.reduce((count, child) => {
      return count + child.quantity * countContainedBags(bags, child.description);
    }, 0);
  }
};
