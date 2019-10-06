const add = (x: number, y: number): number => x + y;
const substract = (x: number, y: number): number => x - y;
function divide(x: number, y: number): number {
  return x / y;
}
const multiply = function(x: number, y: number): number {
  return x * y;
};
const logger = (message: string): void => console.log(message);
const throwError = (message: string): never => {
  throw new Error(message);
};
const foreCast = {
  time: new Date(),
  weather: "sunny"
};
const logWeather = ({ time, weather }: { time: Date; weather: string }): void =>
  console.log(weather);
