interface Reportable {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}
const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `The model is ${this.name}, year is ${this.year} and working status is ${this.broken};`;
  }
};
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink is ${this.color} and has this amount of sugar ${this.sugar}`;
  }
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
