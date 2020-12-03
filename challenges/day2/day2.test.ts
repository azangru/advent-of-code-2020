import { countLetterEncounters } from './validate-text';

describe('countLetterEncounters', () => {

  test('example 1', () => {
    expect(countLetterEncounters('abcde', 'a')).toBe(1);
  });

  test('example 2', () => {
    expect(countLetterEncounters('cdefg', 'b')).toBe(0);
  });

  test('example 3', () => {
    expect(countLetterEncounters('ccccccccc', 'c')).toBe(9);
  });

});
