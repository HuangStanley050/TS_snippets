function logError(message: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (er) {
        console.log("oops");
      }
    };
  };
}

class Boat {
  color: string = "red";

  @logError("oooasfdsadf")
  pilot(): void {
    throw new Error("aaaaaa!");
    console.log("swish");
  }
  get formattedColor(): string {
    return `
      this boat's color is ${this.color}
    `;
  }
}

new Boat().pilot();
