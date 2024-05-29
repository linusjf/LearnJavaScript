#!/usr/bin/env ts-node
// define a function
function myFun() {
  console.log("Very Good!");
}
myFun();
// define a function with arg
function myFunc(arg: any) {
  console.log(arg + " in 8 Hours!");
}
// call the function with arguments
myFunc("C#");
function add(num1: any, num2: any) {
  return num1 + num2;
  // pass the result value to the caller
}
console.log("3 + 5 = " + add(3, 5));
const booktitle = function () {
  // define an anonymous function
  return "Perl in 8 Hours";
};
console.log(booktitle());
// call the anonymous function
const booking = (str: string) => str + " in 8 Hours";
console.log(booking("Go"));
