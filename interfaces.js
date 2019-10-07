var oldCivic = {
    name: "Civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "The model is " + this.name + ", year is " + this.year + " and working status is " + this.broken + ";";
    }
};
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "my drink is " + this.color + " and has this amount of sugar " + this.sugar;
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
