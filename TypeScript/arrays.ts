#!/usr/bin/env ts-node
// create an array 
var arr:string[ ] = ['A', 'B', 'C', 'D'];
// access index 0 element 
console.log(arr[0]); 
console.log(arr[1]);
console.log(arr[2]); 
console.log(arr[3]);
// create an array object 
var arr:string[ ] = new Array(4);
// assign value A to the index 
arr[0] = "A"; 
arr[1] = "B"; 
arr[2] = "C"; 
arr[3] = "D"; 
console.log (arr[0]); 
console.log (arr[1]); 
console.log (arr[2]); 
console.log (arr[3]);
var index:any; 
var arr:string[ ] = ["A", "B", "C", "D"];
for(index in arr) { 
  // iterate over the array 
  console.log(arr[index]) ;
}
var ar:number[] = [10, 11, 12];
// assign the each element value 
var[ x, y, z] = ar; 
console.log(x);
console.log(y); 
console.log(z);
var arr1 = [1,2,3,4]; 
var arr2 = [5,6,7,8]; 
var myArr = arr1.concat(arr2);
// connect two arrays 
console.log("The connected array is: " + myArr );
var myArrLength = arr1.length + arr2.length; 
// get length 
console.log("The length of the two arrays is: " + myArrLength );
arr = new Array(" A ", " B ", " C ", " D "); 
arr.unshift(" First ");
// add an element to the beginning 
console.log("The return array elements are: " + arr );
arr.shift( ); // remove an element at the beginning 
console.log("The return array elements are: " + arr );
arr = new Array(" A ", " B ", " C ", " D "); 
arr.push(" Last "); // add an element to the end 
console.log("The return array elements are: " + arr );
arr.pop(); // removes an element at the end 
console.log("The return array is: " + arr);
arr = new Array(" C ", " B ", " D ", " A ");
var sorted = arr.sort(); // sort the array 
console.log("The sorted elements are:" + sorted);
let threePigs: number[] = [1, 2, 3];
console.log(threePigs);
let genericStringArray: Array<string> = ['first', '2nd', '3rd'];
console.log(genericStringArray);
const inventory = [ 
  {name: 'apples', quantity: 2}, 
  {name: 'bananas', quantity: 0}, 
  {name: 'cherries', quantity: 5} 
]; 
function findCherries(fruit:any) { 
  return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries)); 
 /* OR */ 
console.log(inventory.find(e => e.name === 'apples')); 
