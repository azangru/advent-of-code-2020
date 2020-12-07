import { Traverser } from './traverser';

describe('Traverser', () => {

  const exampleMap = `
    ..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#
  `.split('\n').map(str => str.trim()).filter(Boolean);


  test('example 1', () => {
    const traverser = new Traverser(exampleMap);
    traverser.traverse();

    expect(traverser.getTrees()).toBe(7);
  });

  test('example 2', () => {
    const options = { right: 1, down: 1 };
    const traverser = new Traverser(exampleMap, options);
    traverser.traverse();

    expect(traverser.getTrees()).toBe(2);
  });

  test('example 3', () => {
    const options = { right: 5, down: 1 };
    const traverser = new Traverser(exampleMap, options);
    traverser.traverse();

    expect(traverser.getTrees()).toBe(3);
  });

  test('example 4', () => {
    const options = { right: 7, down: 1 };
    const traverser = new Traverser(exampleMap, options);
    traverser.traverse();

    expect(traverser.getTrees()).toBe(4);
  });

  test('example 5', () => {
    const options = { right: 1, down: 2 };
    const traverser = new Traverser(exampleMap, options);
    traverser.traverse();

    expect(traverser.getTrees()).toBe(2);
  });

});
