#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
// never type
let xn: never;
let yn: never;
const zn: number = 100;
// correct !
// @ts-ignore
xn = zn;
// correct ! output: undefined
console.log(xn);
// error !
// @ts-ignore
xn = zn;
console.log(xn);
