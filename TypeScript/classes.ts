class Parent {
  static num:number;
  static func():void {
    console.log("The num value is " + Parent.num);
  }
  str:string;
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
