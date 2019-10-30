import "reflect-metadata";

class Plane {
  color: string = "red";

  @markFunction("hahahah")
  fly(): void {
    console.log("verrrrr");
  }
}
function markFunction(secretInfo: String) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");

console.log(secret);
