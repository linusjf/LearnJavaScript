#!/usr/bin/env ts-node
import {Operator} from "./Operator";
class Mul implements Operator {
  eval(a:number,b:number):number {
    return a * b;
  }
}
export {Mul};
