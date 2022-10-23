var globalNum = 200; 
// global variable 
function myFunc():void { 
  // local variable 
  var localNum = 100; 
  console.log("The local variable: " + localNum);
} 
console.log("The global variable: " + globalNum); 
myFunc();

class Vehicle {
  car:string; 
  // declare a variable member “car”
  constructor(car:string) {
    this.car = car;
  }
  drive():void {
    console.log("I am driving a new " + this.car);
  }
}

var obj = new Vehicle("limousine");
console.log(obj.car);
obj.drive();

class Building {
  High:number;
  constructor(param:number) {
    this.High = param;
  }
}

// extends 
class House extends Building { 
  size():void {
    console.log("The height of the house is: "
                + this.High + " feet");
  }
}

var obj2 = new House(1000);
obj2.size();
