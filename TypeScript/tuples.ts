#!/usr/bin/env ts-node
// create a tuple
let tup = ["Score", 100, true];
console.log(tup[0]);
console.log(tup[1]);
console.log(tup[2]);
tup[0] = 10;
tup[1] = 11;
tup[2] = 12;
console.log(tup[0] + tup[1] + tup[2]);
// create a tuple
tup = ["Score", 100, true];
// tuple assign values
const [ex, why, zee] = tup;
console.log(ex);
console.log(why);
console.log(zee);
// union types
let value: string | number | boolean;
value = "Score";
console.log(value + " is a " + typeof value + " type");
value = 100;
console.log(value + " is a " + typeof value + " type");
value = true;
console.log(value + " is a " + typeof value + " type");
// union types
let array: string[] | number[] = ["A", "B", "C"];
let n: number;
for (n = 0; n < array.length; n++) {
  console.log(array[n]);
}
array = [10, 11, 12];
for (n = 0; n < array.length; n++) {
  console.log(array[n]);
}
