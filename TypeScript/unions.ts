#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
function whatTime(hour: number|string, minute: number|string): string {
  return hour + ":" + minute;
}
console.log(whatTime(1, 30));
console.log(whatTime("1", 30));
console.log(whatTime(1, "30"));
console.log(whatTime("1", "30"));
function addTen(start: number|string): number {
  if (typeof start === "string")
    return parseInt(start) + 10;
  else
    return start + 10;
}
