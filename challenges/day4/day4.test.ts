// @ts-ignore
import dedent from 'dedent';

import { splitDocuments } from './parse-input';
import { isValid1 } from './validators';

describe('isValid1', () => {

  const rawInput: string = dedent`
  ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
  byr:1937 iyr:2017 cid:147 hgt:183cm

  iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
  hcl:#cfa07d byr:1929

  hcl:#ae17e1 iyr:2013
  eyr:2024
  ecl:brn pid:760753108 byr:1931
  hgt:179cm

  hcl:#cfa07d eyr:2025 pid:166559648
  iyr:2011 ecl:brn hgt:59in
  `;

  const documents = splitDocuments(rawInput);

  test('example 1', () => {
    expect(isValid1(documents[0])).toBe(true);
  });

  test('example 2', () => {
    expect(isValid1(documents[1])).toBe(false);
  });

  test('example 3', () => {
    expect(isValid1(documents[2])).toBe(true);
  });

  test('example 4', () => {
    expect(isValid1(documents[3])).toBe(false);
  });
});
