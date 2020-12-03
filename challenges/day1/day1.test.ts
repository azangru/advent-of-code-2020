import { findPair, findTriplet } from './find-pair';

test('find pair', () => {
  const input = [1721, 979, 366, 299, 675, 1456];

  expect(findPair(input)).toEqual([1721, 299]);
});

test('find triplet', () => {
  const input = [1721, 979, 366, 299, 675, 1456];

  expect(findTriplet(input)).toEqual([979, 366, 675]);
});
