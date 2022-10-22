// never type 
var x: never;
var y: never;
var z: number = 100;
// correct ! 
x = y; 
// correct ! output: undefined
console.log(x); 
// error !
x = z;
console.log(x);
