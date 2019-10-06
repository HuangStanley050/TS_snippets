const profile = {
  name: "alex",
  age: 22,
  coords: {
    long: 10,
    lat: 2
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { long, lat }
}: { coords: { long: number; lat: number } } = profile;
