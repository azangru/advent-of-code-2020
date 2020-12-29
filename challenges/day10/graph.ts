export class Graph {

  private start: number;
  private end: number;
  private adjList: Map<number, number[]> = new Map();

  private memo: Map<number, number> = new Map();

  constructor(sequence: number[]) {
    this.start = sequence[0];
    this.end = sequence[sequence.length - 1];

    for(let i = 0; i < sequence.length; i++) {
      for (let j = i + 1; j < sequence.length && sequence[j] <= sequence[i] + 3; j++) {
        const number = sequence[i];
        const linkedToNumber = this.adjList.get(number);
        if (!linkedToNumber) {
          this.adjList.set(number, [sequence[j]]);
        } else {
          linkedToNumber.push(sequence[j]);
        }
      }
    }
  }

  countPaths(current: number = this.start): number {
    const memoized = this.memo.get(current);
    if (typeof memoized === 'number') {
      return memoized;
    }

    const connectedVertices = this.adjList.get(current) as number[];
    if (connectedVertices[0] === this.end) {
      return 1;
    } else {
      const result = connectedVertices.reduce((acc, vertex) => acc + this.countPaths(vertex), 0);
      this.memo.set(current, result);
      return result; 
    }
  }

  getAdjacencyList() {
    return this.adjList;
  }

}
