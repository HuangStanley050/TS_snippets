class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const stuff = new ArrayOfAnything(["2", "4"]);

const printStrings = (arr: string[]): void => {
  arr.forEach(s => console.log(s));
};

const printNumbers = (arr: number[]): void => {
  arr.forEach(s => console.log(s));
};

const printAnything = <T>(arr: T[]): void => {
  arr.forEach(s => console.log(s));
};
printAnything<string>(["a", "b"]);

//Generic constraints

class Car {
  print(): void {
    console.log("I am a car");
  }
}

class House {
  print(): void {
    console.log("I am a house");
  }
}
interface Printable {
  print(): void;
}
const printHousesOrCars = <T extends Printable>(arr: T[]) => {
  arr.forEach(s => s.print());
};

printHousesOrCars<House>([new House(), new House()]);
