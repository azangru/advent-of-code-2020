import { Game as Game1 } from './part1-solver';


const solvePart1 = () => {
  const input = [18,8,0,5,4,1,20];
  const game = new Game1(input, 2020);
  game.run();
  return game.getLastNumberSpoken();
};

const solvePart2 = () => {
  const input = [18,8,0,5,4,1,20];
  const game = new Game1(input, 30000000);
  game.run();
  return game.getLastNumberSpoken();
};

console.log('solution to part 1 of day 15 is:', solvePart1());
console.log('solution to part 2 of day 15 is:', solvePart2());
