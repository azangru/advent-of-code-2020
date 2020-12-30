import dedent from 'ts-dedent';

import { Ship } from './ship';

describe('ship', () => {

  const input = dedent`
    F10
    N3
    F7
    R90
    F11
  `;

  test('example 1', () => {
    const ship = new Ship(input);
    ship.sail();

    expect(ship.getManhattanDistanceFromOrigin()).toBe(25);
  }); 


});
