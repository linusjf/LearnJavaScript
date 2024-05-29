#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
for (let x = 0; x <= 4; x++) {
  // repeat 4 times
  console.log(x);
}
const nums: any = "0 1 2 3 4";
let i: any;
for (i in nums) {
  console.log(nums[i]);
}
const numarr = [ 0, 1, 2, 3, 4 ];
for (const item of numarr) {
  console.log(item);
}
var counter = 0;
while (counter < 4) {
  // run 4 times
  console.log("&");
  counter++;
  //
}
counter = 0;
do {
  console.log("@");
  counter++;
} while (counter < 4);
// run 4 times
counter = 0;
while (counter < 10) {
  if (counter == 5)
    break;
  // exit the while loop
  counter++;
}
console.log(counter);
counter = 0;
while (counter < 5) {
  counter++;
  if (counter == 3)
    continue;
  // go the next while loop
  console.log(counter);
}
