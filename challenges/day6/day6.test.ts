// @ts-ignore
import dedent from 'dedent';

import {
  countAllDistinctAnswers,
  countAllCommonAnswers,
  countCommonPerGroup
} from './count';
import { splitIntoGroups } from './parse-input';


const input: string = dedent`
  abc

  a
  b
  c

  ab
  ac

  a
  a
  a
  a

  b`;

describe('countAllDistinctAnswers', () => {

  test('example', () => {
    expect(countAllDistinctAnswers(input)).toBe(11);
  });

});

describe('countCommonPerGroup', () => {

  test('example', () => {
    const answerGroups = splitIntoGroups(input);

    expect(countCommonPerGroup(answerGroups[0])).toBe(3);
    expect(countCommonPerGroup(answerGroups[1])).toBe(0);
    expect(countCommonPerGroup(answerGroups[2])).toBe(1);
    expect(countCommonPerGroup(answerGroups[3])).toBe(1);
    expect(countCommonPerGroup(answerGroups[4])).toBe(1);
  });

});

describe('countAllCommonAnswers', () => {

  test('example', () => {
    expect(countAllCommonAnswers(input)).toBe(6);
  });

});
