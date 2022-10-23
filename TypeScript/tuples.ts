// create a tuple 
var tup = ["Score", 100, true]; 
console.log( tup[0] );
console.log( tup[1] );
console.log( tup[2] );
tup[0] = 10;
tup[1] = 11;
tup[2] = 12;
console.log( tup[0] + tup[1] + tup[2] );
// create a tuple 
tup = ["Score", 100, true]; 
// tuple assign values
var [ x, y, z ] = tup;
console.log( x ); 
console.log( y ); 
console.log( z );
// union types 
var value: string | number | boolean;
value = "Score"; 
console.log( value + " is a " + typeof(value) + " type" );
value = 100; 
console.log( value + " is a " + typeof(value) + " type" );
value = true;
console.log( value + " is a " + typeof(value) + " type" );
// union types 
var arr: string[ ] | number[ ]; 
arr = ["A","B","C"];
var n:number; 
for(n = 0;n<arr.length;n++) { 
  console.log(arr[n]); 
}
arr = [10,11,12];
for(n = 0;n<arr.length;n++) { 
  console.log(arr[n]);
}
