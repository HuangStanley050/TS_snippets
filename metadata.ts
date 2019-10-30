import "reflect-metadata";

const plane = {
  color: "red"
};

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 2, plane);
// const height = Reflect.getMetadata("height", plane);
// console.log(height);

Reflect.defineMetadata("note", "hi there", plane, "color");
const color = Reflect.getMetadata("note", plane, "color");
console.log(color);
