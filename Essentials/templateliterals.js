#!/usr/bin/env node

console.log(`\`` === "`");
// true
console.log(`\${1}` === "${1}");
// true
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
function isLargeScreen() {
  return false;
}
const item = { isCollapsed: false };
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
console.log(classes);
