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

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
console.log.bind(1, "New")`Hello`; // 2 [ 'Hello' ]
console.log.bind(1, console)`Hello`; // 2 [ 'Hello' ]
console.log.bind(1, Object)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`;
// [Arguments] { '0': [ 'Hello' ] }
const fn = new Function("console.log(arguments)");
fn();
fn`Hello`;
// [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []
recursive`Hello``, ``World`;
