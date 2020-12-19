import {
  findRow,
  findColumn,
  findSeatId
} from './seat-finder';

describe('findRow', () => {

  test('example 1', () => {
    const input = 'BFFFBBFRRR';

    expect(findRow(input)).toBe(70);
  });

  test('example 2', () => {
    const input = 'FFFBBBFRRR';

    expect(findRow(input)).toBe(14);
  });

  test('example 3', () => {
    const input = 'BBFFBBFRLL';

    expect(findRow(input)).toBe(102);
  });

});

describe('findColumn', () => {

  test('example 1', () => {
    const input = 'BFFFBBFRRR';

    expect(findColumn(input)).toBe(7);
  });

  test('example 2', () => {
    const input = 'FFFBBBFRRR';

    expect(findColumn(input)).toBe(7);
  });

  test('example 3', () => {
    const input = 'BBFFBBFRLL';

    expect(findColumn(input)).toBe(4);
  });

});

describe('findSeatId', () => {

  test('example 1', () => {
    const input = 'BFFFBBFRRR';

    expect(findSeatId(input)).toBe(567);
  });

  test('example 2', () => {
    const input = 'FFFBBBFRRR';

    expect(findSeatId(input)).toBe(119);
  });

  test('example 3', () => {
    const input = 'BBFFBBFRLL';

    expect(findSeatId(input)).toBe(820);
  });

});
