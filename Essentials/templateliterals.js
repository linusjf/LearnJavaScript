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

function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
console.log(t1Closure("Y", "A")); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
console.log(t2Closure("Hello", { foo: "World" })); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
console.log(t3Closure("foo", { name: "MDN", age: 30 }));
// "I'm MDN. I'm almost 30 years old."
console.log(t3Closure({ name: "MDN", age: 30 }));
// "I'm MDN. I'm almost 30 years old."
const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Return a freshly made object
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${"world"}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
console.log(evaluateLiteral());
console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array
console.log(callHistory[0], callHistory[1]);
{
  function tag(strings) {
    console.log(strings.raw[0]);
  }

  tag`string text line 1 \n string text line 2`;
  // Logs "string text line 1 \n string text line 2" ,
  // including the two characters '\' and 'n'
}
const str = String.raw`Hi\n${2 + 3}!`;
// "Hi\\n5!"

console.log(str.length);
// 6

console.log(Array.from(str).join(","));
// "H,i,\\,n,5,!"
