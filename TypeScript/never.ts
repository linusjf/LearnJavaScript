#!/usr/bin/env ts-node
// never type 
var xn: never;
var yn: never;
var zn: number = 100;
// correct ! 
// @ts-ignore
xn = zn; 
// correct ! output: undefined
console.log(xn); 
// error !
// @ts-ignore
xn = zn;
console.log(xn);
