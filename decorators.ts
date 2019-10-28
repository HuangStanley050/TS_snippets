const testDecorator = (target: any, key: string): void => {
  console.log("Target ", target);
  console.log("Key ", key);
};
class Boat {
  color: string = "red";

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
  get formattedColor(): string {
    return `
      this boat's color is ${this.color}
    `;
  }
}
