import {
  countLetterEncounters,
  isValidPassword,
  isValidPassword2
} from './validate-text';

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

describe('isValidPassword', () => {

  test('example 1', () => {
    expect(isValidPassword('1-3 a: abcde')).toBe(true);
  });

  test('example 2', () => {
    expect(isValidPassword('1-3 b: cdefg')).toBe(false);
  });

  test('example 3', () => {
    expect(isValidPassword('2-9 c: ccccccccc')).toBe(true);
  }); 

});

describe('isValidPassword2', () => {

  test('example 1', () => {
    expect(isValidPassword2('1-3 a: abcde')).toBe(true);
  });

  test('example 2', () => {
    expect(isValidPassword2('1-3 b: cdefg')).toBe(false);
  });

  test('example 3', () => {
    expect(isValidPassword2('2-9 c: ccccccccc')).toBe(false);
  }); 

});
