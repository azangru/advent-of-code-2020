export const findPair = (input: number[]) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (i === j) {
        continue;
      }
      const firstNumber = input[i];
      const secondNumber = input[j];
      if (firstNumber + secondNumber === 2020) {
        return [firstNumber, secondNumber];
      }
    }
  }
}
