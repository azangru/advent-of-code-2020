import { splitIntoGroups, splitIntoItems } from './parse-input';

export const countAllDistinctAnswers = (input: string) => {
  const groups = splitIntoGroups(input);

  return groups.reduce((count, group) => {
    return count + countDistinctPerGroup(group);
  }, 0);
};

export const countAllCommonAnswers = (input: string) => {
  const groups = splitIntoGroups(input);

  return groups.reduce((count, group) => {
    return count + countCommonPerGroup(group);
  }, 0);
}

export const countDistinctPerGroup = (group: string) => {
  const answerSheets = splitIntoItems(group);

  const distinctAnswers = answerSheets.reduce(( set, sheet ) => {
    const answers = sheet.split('');
    answers.forEach(answer => set.add(answer));
    return set;
  }, new Set());

  return distinctAnswers.size;
};

export const countCommonPerGroup = (group: string) => {
  const answerSheets = splitIntoItems(group);
  const answerGroups = answerSheets.map(sheet => new Set(sheet));

  return answerGroups.reduce((finalSet, group) => {
    return new Set([...group].filter(item => finalSet.has(item)));
  }).size;
};
