import { a,b } from "./util.js";
import * as util from "./util.js";
import asdf from "./util.js";

console.log(asdf);
console.log("................");
console.log(a);
console.log(b);
console.log("................");
console.log(util.a);
console.log(util.b);

// Variables & Values

/// Value:
console.log("Hello World!");

/// Variable:
let userMessage = "Hello World!";
console.log(userMessage);
userMessage = "Hello george!";
console.log(userMessage);

/// const:
const pi = 3.14159;
console.log(pi);
//pi = 5; // This will cause an error

// revisiting operators
console.log("hello" + " world");
console.log("hello" + 5);
console.log("hello" + true);
console.log(5 + 5);
console.log(10 === 5);

// functions

/// function declaration
function greet(){
  console.log("Hello!");
}

/// function call
greet();
asdf();
// asdf.greet(); // this will not work