#!/usr/bin/env node
let array = [10, 20, 30, 40, 50];
const obj = { a: 1, b: 2 };
let a = 10,
  b = 20,
  a1 = 25,
  b1 = 35,
  c,
  d,
  rest,
  pop,
  push;
const key = "z";
{
  let a, b, rest;
  [a, b] = [10, 20];
  console.log("[a, b] = [10, 20]");

  console.log(a);
  // Expected output: 10

  console.log(b);
  // Expected output: 20

  [a, b, ...rest] = [10, 20, 30, 40, 50];

  console.log(rest);
}
// Expected output: Array [30, 40, 50]
{
  const [a, b] = array;
  console.log("const [a, b] = array");
  console.log(a);
  console.log(b);
}
{
  const [a, , b] = array;
  console.log("const [a, , b] = array");
  console.log(a);
  console.log(b);
}
{
  const [a = aDefault, b] = array;
  console.log("const [a = aDefault, b] = array");
  console.log(a);
  console.log(b);
}
{
  const [a, b, ...rest] = array;
  console.log("const [a, b, ...rest] = array");
  console.log(a);
  console.log(b);
  console.log(rest);
}
{
  const [a, , b, ...rest] = array;
  console.log("const [a, , b, ...rest] = array");
  console.log(a);
  console.log(b);
  console.log(rest);
}
{
  const [a, b, ...{ pop, push }] = array;
  console.log("const [a, b, ...{ pop, push }] = array");
  console.log(a);
  console.log(b);
}
{
  const [a, b, ...[c, d]] = array;
  console.log("const [a, b, ...[c, d]] = array");
  console.log(a);
  console.log(b);
}
{
  const { a, b } = obj;
  console.log("const { a, b } = obj");
  console.log(a);
  console.log(b);
}
{
  const { a: a1, b: b1 } = obj;
  console.log("const { a: a1, b: b1 } = obj");
  console.log(a);
  console.log(b);
}
{
  const { a: a1 = aDefault, b = bDefault } = obj;
  console.log("const { a: a1 = aDefault, b = bDefault } = obj");
  console.log(a);
  console.log(b);
}
{
  const { a, b, ...rest } = obj;
  console.log("const { a, b, ...rest } = obj");
  console.log(a);
  console.log(b);
  console.log(rest);
}
{
  const { a: a1, b: b1, ...rest } = obj;
  console.log("const { a: a1, b: b1, ...rest } = obj");
  console.log(a);
  console.log(b);
  console.log(rest);
}
{
  const o = ({ [key]: a } = obj);
  console.log("const o = ({ [key]: a } = obj)");
  console.log(o);
}
{
  const x = [1, 2, 3, 4, 5];
  console.log("const x = [1, 2, 3, 4, 5]");
  const [y, z] = x;
  console.log("const [y, z] = x");
  console.log(y); // 1
  console.log(z); // 2
}
{
  const obj = { a: 1, b: { c: 2 } };
  console.log("const obj = { a: 1, b: { c: 2 } }");
  const {
    a,
    b: { c: d },
  } = obj;
  console.log(`const {
    a,
    b: { c: d },
  } = obj;`);
  // Two variables are bound: `a` and `d`
  console.log(a); // 1
  console.log(d); // 2
}
{
  const obj = { a: 1, b: { c: 2 } };
  const { a } = obj; // a is constant
  console.log("const { a } = obj");
  let {
    b: { c: d },
  } = obj; // d is re-assignable
  console.log(`let {
    b: { c: d },
  } = obj`);
  // Two variables are bound: `a` and `d`
  console.log(a); // 1
  console.log(d); // 2
}
{
  const numbers = [];
  const obj = { a: 1, b: 2 };
  ({ a: numbers[0], b: numbers[1] } = obj);
  // The properties `a` and `b` are assigned to properties of `numbers`
  console.log(numbers);
}
{
  const [a = 1] = []; // a is 1
  const { b = 2 } = { b: undefined }; // b is 2
  const { c = 2 } = { c: null }; // c is null
  console.log(a, b, c);
}
{
  const { b = console.log("hey") } = { b: 2 };
  // Does not log anything, because `b` is defined and there's no need
  // to evaluate the default value.
  console.log(b);
}
{
  const { a, ...others } = { a: 1, b: 2, c: 3 };
  console.log(others); // { b: 2, c: 3 }

  const [first, ...others2] = [1, 2, 3];
  console.log(others2); // [2, 3]
}
{
  const foo = ["one", "two", "three"];
  const [red, yellow, green] = foo;
  console.log(red); // "one"
  console.log(yellow); // "two"
  console.log(green); // "three"
}
{
  const foo = ["one", "two"];

  const [red, yellow, green, blue] = foo;
  console.log(red); // "one"
  console.log(yellow); // "two"
  console.log(green); // undefined
  console.log(blue); // undefined
}
{
  let a = 1;
  let b = 3;

  [a, b] = [b, a];
  console.log(a); // 3
  console.log(b); // 1

  const arr = [1, 2, 3];
  [arr[2], arr[1]] = [arr[1], arr[2]];
  console.log(arr); // [1, 3, 2]
}
{
  function f() {
    return [1, 2];
  }

  const [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2
}
{
  function f() {
    return [1, 2, 3];
  }

  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3

  const [c] = f();
  console.log(c); // 1
}
{
  [, ,] = f();
}
{
  const [a, b, ...{ length }] = [1, 2, 3, 4];
  console.log(a, b, length); // 1 2 2
}
{
  const [a, b, ...[c, d]] = [1, 2, 3, 4];
  console.log(a, b, c, d); // 1 2 3 4
}
