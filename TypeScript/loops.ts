#!/usr/bin/env ts-node
for (var x = 0; x <= 4; x++) {     // repeat 4 times 
  console.log(x); 
}
var nums:any = "0 1 2 3 4";
var i:any; 
for(i in nums) { 
  console.log(nums[i]); 
}
var numarr = [0, 1, 2, 3, 4]; 
for (var item of numarr) { 
  console.log(item); 
}
var counter = 0; 
while (counter < 4) {   
  // run 4 times 
  console.log( "&" ); 
  counter++; 
  // 
}
var counter=0; 
do { 
  console.log ( "@" ); 
  counter++; 
} while (counter<4); 
// run 4 times
counter=0; 
while (counter<10) { 
  if (counter==5) break; 
  // exit the while loop 
  counter++; 
} 
console.log (counter);
counter=0; 
while (counter<5) { 
  counter++; 
  if (counter==3) continue; 
  // go the next while loop 
  console.log ( counter ); 
}
