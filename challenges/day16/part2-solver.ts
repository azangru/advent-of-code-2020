import { parseInput } from './parse-input';

type Rules = ReturnType<typeof parseInput>['rules'];

export const solve2 = (input: string) => {
  const { rules, myTicket, nearbyTickets } = parseInput(input);
  const indexedRuleMap = getTicketFields(nearbyTickets, rules);
  return [...indexedRuleMap.entries()]
    .filter(([, value]) => value.startsWith('departure'))
    .reduce((acc, entry) => {
      console.log('entry', entry);
      const [index] = entry;
      return acc + myTicket[index];
    }, 0);
};

export const getTicketFields = (nearbyTickets: number[][], rules: Rules) => {
  const validTickets = filterValidTickets(nearbyTickets, rules);
  const numberColumns = getNumberColumns(validTickets);
  return matchColumnsToRules(numberColumns, rules);
};

const filterValidTickets = (tickets: number[][], rules: Rules) => {
  const validIntervals = rules.reduce((acc, rule): number[][][] => {
    return [...acc, [rule.firstInterval, rule.secondInterval]];
  }, [] as number[][][]);

  return tickets.filter(ticket => {
    return ticket.some(number => {
      return validIntervals.some(([interval1, interval2]) => {
        return (number >= interval1[0] && number <= interval1[1]) ||
              (number >= interval2[0] && number <= interval2[1])
      });
    });
  });
};

const getNumberColumns = (tickets: number[][]) => {
  const columns: number[][] = [];
  
  for (let i = 0; i < tickets.length; i++) {
    for(let j = 0; j < tickets[i].length; j++) {
      if (!columns[j]) {
        columns[j] = [];
      }
      columns[j][i] = tickets[i][j];
    }
  }

  return columns;
};

const matchColumnsToRules = (columns: number[][], rules: Rules) => {
  let rulesMap = new Map<number, string>();

  const matchedRulesIndices = new Set<number>();
  const matchedColumnIndices = new Set<number>();

  while (matchedRulesIndices.size < columns.length) {
    console.log('matchedRulesIndices.size', matchedRulesIndices.size);

    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      if (matchedColumnIndices.has(i)) {
        continue;
      }

      const matchedRules = rules.reduce((acc, rule, index) => {
        if (matchedRulesIndices.has(index)) {
          return acc;
        }
        const { firstInterval, secondInterval } = rule;
        const doesMatch = column.every(number => {
          return (number >= firstInterval[0] && number <= firstInterval[1]) ||
                 (number >= secondInterval[0] && number <= secondInterval[1]);
        });
        return doesMatch ? [...acc, { rule, columnIndex: i, index }] : acc;
      }, [] as Array<{ rule: Rules[0], index: number, columnIndex: number }>);

      console.log('matchedRules.length', matchedRules);

  
      if (matchedRules.length === 1) {
        const matchedRule = matchedRules[0];
        const { index: ruleIndex, columnIndex } = matchedRule;
        rulesMap.set(columnIndex, matchedRule.rule.fieldName);
  
        matchedRulesIndices.add(ruleIndex);
        matchedColumnIndices.add(columnIndex);
        break;
      }
    }

  }

  return rulesMap;
};
