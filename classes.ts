class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("honking");
  }
}
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vrrrromm");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
const car = new Car(4, "red");
//car.honk();
car.startDrivingProcess();
//vehicle.honk();
//vehicle.drive();
