const apple: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

//array type
let colors: string[] = ["red", "blue", "pink"];

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

//classes

class Car {}
let car: Car = new Car();

//object literal

const point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};