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
