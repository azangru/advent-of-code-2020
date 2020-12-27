export const findContiguousRange = (list: number[], target: number) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const range = list.slice(i, j + 1);
      const rangeSum = sum(range);
      if (rangeSum === target) {
        return range;
      } else if (rangeSum > target) {
        break;
      }
    }
  }
};

const sum = (list: number[]) => list.reduce((acc, num) => acc + num, 0);
