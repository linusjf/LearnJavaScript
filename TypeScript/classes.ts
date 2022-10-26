class Parent {
  static num:number;
  static func():void {
    console.log("The num value is " + Parent.num);
  }
  str:string = "";
  myFunc():void {
    console.log("I am from parent class.");
  }
}

class Child extends Parent {
  myFunc():void {
    super.myFunc();
    console.log("I am from child class.");
  }
}

class GrandChild extends Child {}

var obj = new GrandChild();
obj.str = "The greeting from a grandchild.";
console.log(obj.str);

obj = new Child();
obj.myFunc();

Parent.num = 200;
Parent.func();

interface Book {
  title:string;
}

class EBook implements Book {
title:string = "Shell Scripting in 8 hours";
}

var book = new EBook();
console.log(book.title);

var ebook:Book = {
title:"Perl in 8 hours",
}
console.log(ebook.title);

var books = {
title1:"Swift in 8 hours",
title2:"Scala in 8 hours",
title:function(){}
};
console.log(books.title1);
console.log(books.title2);
books.title = function() {
console.log("Kotlin in 8 hours");
};
books.title();

abstract class Machine { 
  constructor(public manufacturer: string) {
}

summary(): string { 
  return `${this.manufacturer} makes this machine.`; 
}

abstract moreInfo(): string; 
}

class Car extends Machine { 
  constructor(manufacturer: string, public position: number, protected speed: number) { 
    super(manufacturer); 
  } 
  move () { 
    this.position += this.speed; 
  } 
  moreInfo () { 
    return `This is a car located at ${this.position} and going ${this.speed} mph!`; 
  } 
}

let myCar = new Car("Konda", 10, 70); 
myCar.move(); 
console.log(myCar.summary()); 
console.log(myCar.moreInfo());

class SelfDrivingCar extends Car { 
  constructor(mfr:string,startAutoPilot: boolean) { 
    super(mfr,0, 42); 
    if (startAutoPilot) { 
      this.move(); 
    } 
  } 
} 

let car = new SelfDrivingCar("Tesla",true); 
console.log(car.position);
