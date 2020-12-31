import dedent from 'ts-dedent';

import { Ship, SecondShip  } from './ship';

const input = dedent`
  F10
  N3
  F7
  R90
  F11
`;

describe('ship', () => {

  test('example 1', () => {
    const ship = new Ship(input);
    ship.sail();

    expect(ship.getManhattanDistanceFromOrigin()).toBe(25);
  });

});

describe('second ship', () => {

  test('example 1', () => {
    const ship = new SecondShip(input);
    ship.sail();

    expect(ship.getManhattanDistanceFromOrigin()).toBe(286);
  });

});
