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

//when to use annotation, when function returns any or we declare variables that will be assigned a specific type later

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

let words = ["red", "blue", "green"];
let foundWord: boolean;

for (let i of words) {
  if (i === "green") {
    foundWord = true;
  }
}

const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i of numbers) {
  if (i > 0) {
    numberAboveZero = i;
  }
}
