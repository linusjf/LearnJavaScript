#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
interface String {
  toCamelCase(): string;
  firstPart(): string;
}

String.prototype.firstPart = function():
    string { return this.replace(/[^a-z ]/gi, ""); };

String.prototype.toCamelCase = function(): string {
  return this.firstPart().replace(
      /(?:^\w|[A-Z]|\b\w|\s+)/g, (match: any, index: number) => {
        console.log(match);
        console.log(index);
        return +match === 0
                   ? ""
                   : match[index === 0 ? "toLowerCase" : "toUpperCase"]();
      });
};

console.log("This is an example".firstPart());
console.log("This is a4 bad2 example1".firstPart());
console.log("This is an example".toCamelCase());
console.log("This is another example".toCamelCase());
