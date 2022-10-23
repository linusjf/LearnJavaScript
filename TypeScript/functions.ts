// define a function 
function myFun() { 
  console.log("Very Good!")
} 
myFun();
// define a function with arg 
function myFunc(arg) { 
  console.log( arg + " in 8 Hours!" )
} 
// call the function with arguments
myFunc( "C#" );
function add(num1,num2) { 
  return num1+num2;   
  // pass the result value to the caller 
} 
console.log ("3 + 5 = " + add( 3, 5 ));
var book = function() { // define an anonymous function 
  return "Perl in 8 Hours"; 
} 
console.log(book());
// call the anonymous function
var booking = (str:string) => str + " in 8 Hours";
console.log(booking("Go"));
