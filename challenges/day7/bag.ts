export class Bag {

  public children: Bag[] = [];

  constructor(public description: string, public quantity: number = 1) {}

}
