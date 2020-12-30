import dedent from 'ts-dedent';

import { World } from './world';

const example = `
L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
`;

describe('World', () => {

  test('toString', () => {
    expect(new World(example).toString()).toBe(example.trim());
  });

  describe('update rules', () => {

    const afterOneRound = dedent`
      #.##.##.##
      #######.##
      #.#.#..#..
      ####.##.##
      #.##.##.##
      #.#####.##
      ..#.#.....
      ##########
      #.######.#
      #.#####.##
    `;

    const afterTwoRounds = dedent`
      #.LL.L#.##
      #LLLLLL.L#
      L.L.L..L..
      #LLL.LL.L#
      #.LL.LL.LL
      #.LLLL#.##
      ..L.L.....
      #LLLLLLLL#
      #.LLLLLL.L
      #.#LLLL.##
    `;

    const afterThreeRounds = dedent`
      #.##.L#.##
      #L###LL.L#
      L.#.#..#..
      #L##.##.L#
      #.##.LL.LL
      #.###L#.##
      ..#.#.....
      #L######L#
      #.LL###L.L
      #.#L###.##
    `;

    const afterFourRounds = dedent`
      #.#L.L#.##
      #LLL#LL.L#
      L.L.L..#..
      #LLL.##.L#
      #.LL.LL.LL
      #.LL#L#.##
      ..L.L.....
      #L#LLLL#L#
      #.LLLLLL.L
      #.#L#L#.##
    `;

    const afterFiveRounds = dedent`
      #.#L.L#.##
      #LLL#LL.L#
      L.#.L..#..
      #L##.##.L#
      #.#L.LL.LL
      #.#L#L#.##
      ..L.L.....
      #L#L##L#L#
      #.LLLLLL.L
      #.#L#L#.##
    `;

    test('after one round', () => {
      const world = new World(example);
      world.update();
      expect(world.toString()).toBe(afterOneRound);
    });

    test('after two rounds', () => {
      const world = new World(example);
      world.update();
      world.update();
      expect(world.toString()).toBe(afterTwoRounds);
    });

    test('after three rounds', () => {
      const world = new World(example);
      world.update();
      world.update();
      world.update();
      expect(world.toString()).toBe(afterThreeRounds);
    });

    test('after four rounds', () => {
      const world = new World(example);
      world.update();
      world.update();
      world.update();
      world.update();
      expect(world.toString()).toBe(afterFourRounds);
    });

    test('after five rounds', () => {
      const world = new World(example);
      world.update();
      world.update();
      world.update();
      world.update();
      world.update();
      expect(world.toString()).toBe(afterFiveRounds);
    });

    test('after six rounds (should not change compared to five rounds)', () => {
      const world = new World(example);
      world.update();
      world.update();
      world.update();
      world.update();
      world.update();
      world.update();
      expect(world.toString()).toBe(afterFiveRounds);
    });

    test('countOccupiedSeats', () => {
      const world = new World(example);
      world.update();
      world.update();
      world.update();
      world.update();
      world.update();

      expect(world.countOccupiedSeats()).toBe(37);
    });

  });

});
