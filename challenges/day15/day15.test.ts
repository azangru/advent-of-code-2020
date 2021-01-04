import { Game as Game1 } from './part1-solver';

describe('Game1', () => {

  test('example 1', () => {
    const game = new Game1([0,3,6], 2020);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(436);
  });

  test('example 2', () => {
    const game = new Game1([1,3,2], 2020);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(1);
  });

  test('example 3', () => {
    const game = new Game1([2,1,3], 2020);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(10);
  });

  test('example 4', () => {
    const game = new Game1([1,2,3], 2020);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(27);
  });

  test('example 5', () => {
    const game = new Game1([2,3,1], 2020);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(78);
  });

  test('example 6', () => {
    const game = new Game1([3,2,1], 2020);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(438);
  });

  test('example 7', () => {
    const game = new Game1([3,1,2], 2020);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(1836);
  });
});

describe.only('large numbers', () => {

  const maxTurns = 30000000;

  test('example 1', () => {
    const game = new Game1([0,3,6], maxTurns);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(175594);
  });

  test('example 2', () => {
    const game = new Game1([1,3,2], maxTurns);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(2578);
  });

  test('example 3', () => {
    const game = new Game1([2,1,3], maxTurns);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(3544142);
  });

  test('example 4', () => {
    const game = new Game1([1,2,3], maxTurns);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(261214);
  });

  test('example 5', () => {
    const game = new Game1([2,3,1], maxTurns);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(6895259);
  });

  test('example 6', () => {
    const game = new Game1([3,2,1], maxTurns);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(18);
  });

  test('example 7', () => {
    const game = new Game1([3,1,2], maxTurns);
    game.run();
    expect(game.getLastNumberSpoken()).toBe(362);
  });

});
