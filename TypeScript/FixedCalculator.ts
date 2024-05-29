#!/usr/bin/env ts-node
export * from "./Calculator";
import { Operator } from "./Operator";
class Add implements Operator {
  eval(a: number, b: number): number {
    return a + b;
  }
}
export { Add };
