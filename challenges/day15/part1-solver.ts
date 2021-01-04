export class Game {

  private input: number[];

  // key: number, value: game turn
  private memory: Map<number, number> = new Map();

  private maxTurn;
  private lastNumberSpoken = 0;
  private currentTurn = 0;
  private numberForNextTurn = 0;

  constructor(input: number[], maxTurn: number = 2020) {
    this.input = input;
    this.maxTurn = maxTurn;
  }

  run() {
    while (this.currentTurn !== this.maxTurn) {
      this.executeGameTurn();
    }
  }

  executeGameTurn() {
    this.currentTurn = this.currentTurn + 1;

    if (this.input.length) {
      const number = this.input.shift() as number;
      this.speak(number);
      this.remember(number);
    } else {
      const numberToSpeak = this.numberForNextTurn;
      this.speak(numberToSpeak);
      this.remember(numberToSpeak);
    }
  }

  speak(number: number) {
    if (!this.memory.get(number)) {
      this.numberForNextTurn = 0;
    } else {
      this.numberForNextTurn = this.currentTurn - (this.memory.get(number) as number);
    }
    this.lastNumberSpoken = number;
  }

  remember(number: number) {
    this.memory.set(number, this.currentTurn);
  }

  getLastNumberSpoken() {
    return this.lastNumberSpoken;
  }
}
