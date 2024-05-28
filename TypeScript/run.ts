#!/usr/bin/env ts-node
import { Add, Mul } from "./FixedCalculator";
const add = new Add();
const mul = new Mul();
console.log(add.eval(1, 1));
console.log(mul.eval(4, 3));
