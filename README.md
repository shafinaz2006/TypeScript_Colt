Advantages:

* run tsc file.ts ==> it will create a js file of same name. then node file.js will execute the file.

* reminds to return if the return type is mentioned in function

* type User = {
    readonly id: number; // not changeable
    username: string;
  };

* type Circle = {
    radius: number;
  };

  type Colorful = {
    color: string;
  };

  type ColorfulCircle = Circle & Colorful; // has both the types

  type ColorfulHappyCircle = Circle & Colorful & {
    isHappy: boolean,  // has additional properties
  }

* Array: const ageList: number[] = [45, 56, 13]; // alternate syntax ==> ageList: Array<number>
* Array type: ==> const coords: Point[] = [];

* let coordinates: Point | Loc = { x: 1, y: 34 }; // coordinates variable can have eith Point or Loc type // is called Union type 
  // multiple possible types

* union types in arrays ==> const stuff: (number | string)[] = [1,2,3, "das"]

* literal types ==> let mood: "Happy" | "Sad" = "Happy";

* tuples: arrays of fixed length and ordered with specific types 
  type Car = [string]; array of length 1. tuple
  ==> const color: [number, number, number] = [255, 0, 45];
  ==> const myArray: [number, string] = [10, 'fun'] is correct. ['fun', 10] is wrong

* enum: set of named constants. 
 ==> enum Responses {no, yes, maybe}

* interface: interface Engineer extends Human, Employee {}. interface is for object.
* not possible to have multiple types with same name. 

* classes => blueprint of an object. Constructor: method inside a class. automatically called when the class is instansiated. used to add properties.

* class fields ==> setting a value in a class without constructor