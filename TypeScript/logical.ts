#!/usr/bin/env ts-node
const lx = true;
const ly = false;
const la = lx && ly;
// false
console.log(la);
const lb = lx || ly;
// true
console.log(lb);
const lc = !lx;
// false
console.log(lc);
