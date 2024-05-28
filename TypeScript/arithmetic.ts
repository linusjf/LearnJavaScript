#!/usr/bin/env ts-node
let x: number = 20;
const y: number = 2;
let result: number = 0;
result = x + y;
console.log("20 + 2 = " + result);
result = x / y;
console.log("20 / 2 = " + result);
result = x % y;
console.log("20 % 2 = " + result);
result = ++x;
console.log("++x = " + result);
