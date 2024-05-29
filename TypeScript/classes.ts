#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
class Parent {
  static num: number;
  static func(): void {
    console.log("The num value is " + Parent.num);
  }
  str: string = "";
  myFunc(): void {
    console.log("I am from parent class.");
  }
}

class Child extends Parent {
  myFunc(): void {
    super.myFunc();
    console.log("I am from child class.");
  }
}

class GrandChild extends Child {}

let obj = new GrandChild();
obj.str = "The greeting from a grandchild.";
console.log(obj.str);

obj = new Child();
obj.myFunc();

Parent.num = 200;
Parent.func();

interface Book {
  title: string;
}

class EBook implements Book {
  title: string = "Shell Scripting in 8 hours";
}

const book = new EBook();
console.log(book.title);

const ebook: Book = {
  title: "Perl in 8 hours"
};
console.log(ebook.title);

const books = {
  title1: "Swift in 8 hours",
  title2: "Scala in 8 hours",
  title: function () {}
};
console.log(books.title1);
console.log(books.title2);
books.title = function () {
  console.log("Kotlin in 8 hours");
};
books.title();

abstract class Machine {
  constructor(public manufacturer: string) {}

  summary(): string {
    return `${this.manufacturer} makes this machine.`;
  }

  abstract moreInfo(): string;
}

class Car extends Machine {
  constructor(
    manufacturer: string,
    public position: number,
    protected speed: number
  ) {
    super(manufacturer);
  }
  move() {
    this.position += this.speed;
  }
  moreInfo() {
    return `This is a car located at ${this.position} and going ${this.speed} mph!`;
  }
}

const myCar = new Car("Konda", 10, 70);
myCar.move();
console.log(myCar.summary());
console.log(myCar.moreInfo());

class SelfDrivingCar extends Car {
  constructor(mfr: string, startAutoPilot: boolean) {
    super(mfr, 0, 42);
    if (startAutoPilot) {
      this.move();
    }
  }
}

const car = new SelfDrivingCar("Tesla", true);
console.log(car.position);

class Vehicle {
  public position: number = 0;
  private _speed: number = 42;
  private _MAX_SPEED = 100;
  move() {
    this.position += this._speed;
  }
  get speed(): number {
    return this._speed;
  }
  set speed(value: number) {
    this._speed = Math.min(value, this._MAX_SPEED);
  }
}

const vhl = new Vehicle();
vhl.speed = 120;
console.log(vhl.speed);

class SomeClass {
  public static SomeStaticValue: string = "hello";
  public someMemberValue: number = 15;
  private somePrivateValue: boolean = false;
  constructor() {
    SomeClass.SomeStaticValue = SomeClass.getGoodbye();
    this.someMemberValue = this.getFortyTwo();
    this.somePrivateValue = this.getTrue();
  }
  public static getGoodbye(): string {
    return "goodbye!";
  }
  public getFortyTwo(): number {
    return 42;
  }
  private getTrue(): boolean {
    return true;
  }
}

class AutoMobile {
  name: string;
  engineCapacity: string;
  constructor(name: string, engineCapacity: string) {
    this.name = name;
    this.engineCapacity = engineCapacity;
  }

  describeCar() {
    console.log(
      `${this.name} car comes with ${this.engineCapacity} displacement`
    );
  }
}

new AutoMobile("Maruti Ciaz", "1500cc").describeCar();

class Honda extends AutoMobile {
  seatingCapacity: number;
  constructor(name: string, engineCapacity: string, seatingCapacity: number) {
    super(name, engineCapacity);
    this.seatingCapacity = seatingCapacity;
  }

  describeHonda() {
    super.describeCar();
    console.log(
      `this car comes with seating capacity of ${this.seatingCapacity}`
    );
  }
}

new Honda("honda jazz", "1200cc", 4).describeHonda();
