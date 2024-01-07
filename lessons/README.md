Advantages:
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

* tuples: arrays of fixed length ==> const color: [number, number, number] = [255, 0, 45];