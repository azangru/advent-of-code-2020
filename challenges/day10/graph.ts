export class Graph {

  private start: number;
  private end: number;
  private adjList: Map<number, number[]> = new Map();

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
    const connectedVertices = this.adjList.get(current) as number[];
    if (connectedVertices[0] === this.end) {
      return 1;
    } else {
      return connectedVertices.reduce((acc, vertex) => {
        if (acc && acc % 1000000 === 0) {
          console.log('currently at: ', acc);
        }
        return acc + this.countPaths(vertex);
      }, 0);
    }
  }

  depthFirstSearch() {

  }

  getAdjacencyList() {
    return this.adjList;
  }

}
