#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
function isString(test: any): test is string {
  return typeof test === "string";
}
function exampleString(foo: any) {
  if (isString(foo)) {
    // foo is type as a string in this block
    console.log("it's a string: " + foo);
  } else {
    // foo is type any in this block
    console.log("don't know what this is! [" + foo + "]");
  }
}
exampleString("hello world");
// prints "it's a string: hello world"
exampleString({something : "else"});
// prints "don't know what this is! [[object Object]]"

interface JQuery {
  eq(val: number): boolean;
}

function isJQuery(foo: any): foo is JQuery {
  // test for jQuery's version string
  return foo.jquery !== undefined;
}

function exampleQuery(foo: any) {
  if (isJQuery(foo)) {
    // foo is typed JQuery here
    foo.eq(0);
  }
}

class Pet {}
class Dog extends Pet {
  bark() { console.log("woof"); }
}
class Cat extends Pet {
  purr() { console.log("meow"); }
}
function examplePet(foo: any) {
  if (foo instanceof Dog) {
    // foo is type Dog in this block
    foo.bark();
  }
  if (foo instanceof Cat) {
    // foo is type Cat in this block
    foo.purr();
  }
}
examplePet(new Dog());
examplePet(new Cat());
function exampleNumber(foo: any) {
  if (typeof foo === "number") {
    // foo is type number in this block
    console.log(foo + 100);
  }
  if (typeof foo === "string") {
    // foo is type string in this block
    console.log("not a number: " + foo);
  }
}
exampleNumber(23);
exampleNumber("foo");
