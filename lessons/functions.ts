// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// Return type annotation: default parameter
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);

// Arrow function:
const add = (x: number, y: number): number => {
  return x + y;
};

// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

// Void: returns nothing; or returns undefined
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never // function doesnt even finish
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}

//example: return type number;
function secondsInDay() {
  return 24 * 60 * 60;
}

// example: return type void;

function doNothing() {
  2 + 2;
}
