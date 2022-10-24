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
