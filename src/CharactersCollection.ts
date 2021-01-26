import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const lowerLeftHand = this.data[leftIndex].toLowerCase();
    const lowerRightHand = this.data[rightIndex].toLowerCase();

    return lowerLeftHand > lowerRightHand;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join("");
  }
}
