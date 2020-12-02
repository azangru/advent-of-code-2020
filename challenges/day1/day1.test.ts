import { findPair } from './find-pair';

describe('test', () => {

  test('input', () => {
    const input = [1721, 979, 366, 299, 675, 1456];

    expect(findPair(input)).toEqual([1721, 299]);
  });

});
