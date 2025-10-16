import { a,b } from "./util.js";
import * as util from "./util.js";
import asdf from "./util.js";

// console.log(asdf);
// console.log("................");
// console.log(a);
// console.log(b);
// console.log("................");
// console.log(util.a);
// console.log(util.b);

// // Variables & Values

// /// Value:
// console.log("Hello World!");

// /// Variable:
// let userMessage = "Hello World!";
// console.log(userMessage);
// userMessage = "Hello george!";
// console.log(userMessage);

// /// const:
// const pi = 3.14159;
// console.log(pi);
// //pi = 5; // This will cause an error

// // revisiting operators
// console.log("hello" + " world");
// console.log("hello" + 5);
// console.log("hello" + true);
// console.log(5 + 5);
// console.log(10 === 5);

// // functions

// /// function declaration
// function greet(){
//   console.log("Hello!");
// }

// /// function call including exported function
// greet();
// asdf();
// util.func();
// // asdf.greet(); // this will not work

// function createGreeting(userName, message = "hello"){
//   //console.log(message + ", " + userName + "!");
//   return message + ", " + userName + "!";
// }

// console.log(createGreeting("George", "Welcome back"));
// console.log(createGreeting("maria"));

// // Arrow function
// const createGreeting2 = (userName, message = "hello") => {
//   return message + ", " + userName + "!";
// }
// console.log(createGreeting2("George", "Welcome back"));

// (word) => console.log(word);

// // objects
// const user = {
//   name: "George",
//   age: 30,
//   greet() {
//     console.log("Hello, I am " + this.name);
//   }
// };

// console.log(user);
// console.log(user.name);
// user.greet();

// /// classes
// class User {
//   constructor(name) {
//     this.name = name;
//   }
  
//   greet() {
//     console.log("Hello, I am " + this.name);
//   }
// }

// const user1 = new User("maria");
// console.log(user1);
// user1.greet();

// // arrays
const hobbies =["sports", "cooking", "reading"];
console.log(hobbies);
console.log(hobbies[0]);

hobbies.push("coding");
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

let index = hobbies.findIndex((hobby) => hobby === "cooking");
console.log(index);

const test = hobbies.map((item) => item +"!");
console.log(test);
const transform = hobbies.map((item) => ({ text: item, id: Math.random() }));
console.log(transform);

//hobbies.filter((item) => item !== "sports");

// // destructuring
const userNameData = ["George", "Schwarzmüller"];
const [firstName, lastName] = userNameData;
console.log(firstName, lastName);

const user = { age: 30, userName: "george" };

//const name = user.userName;
//const age = user.age;
const { userName: name , age } = user;
console.log(name, age);

function storeOrder({id, currency}) { // same as function storeOrder(order) {
  console.log('id ' + id);
  console.log('currency ' + currency);
}

storeOrder({id: 5, currency: 'USD', amount: 15.99}); // !has more properties than used in function declaration