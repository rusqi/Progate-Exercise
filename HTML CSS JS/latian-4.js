// file script.js
import { dog1, dog2 } from "./data/dogData";

console.log("---------");
dog1.info();
console.log("---------");
dog2.info();

//file animal.js
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log("Halo");
    }
  
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  export default Animal;

// file dog.js
import chalk from "chalk";
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya adalah seekor ${this.breed}`);
    console.log(`Saya berusia ${this.age} tahun`);
    const humanAge = this.getHumanAge();
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;

// file dogData.js
// Import readline-sync
import readlineSync from "readline-sync";
import Dog from "../class/dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");

// Tulis ulang dengan menggunakan readlineSync.question
const name = readlineSync.question("Ketik nama Anda: ");

// Tulis ulang dengan menggunakan readlineSync.questionInt
const age = readlineSync.questionInt("Ketik usia Anda: ");

// Tulis ulang dengan menggunakan readlineSync.question
const breed = readlineSync.question("Ketik ras Anda: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };