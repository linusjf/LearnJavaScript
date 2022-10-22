for (var x = 0; x <= 4; x++) {     // repeat 4 times 
  console.log(x); 
}
var z:any = "0 1 2 3 4";
var y:any; 
for(y in z) { 
  console.log(z[y]); 
}
var arr = [0, 1, 2, 3, 4]; 
for (var item of arr) { 
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
var num=0; 
while (num<10) { 
  if (num==5) break; 
  // exit the while loop 
  num++; 
} 
console.log ( num );
var num=0; 
while (num<5) { 
  num++; 
  if (num==3) continue; 
  // go the next while loop 
  console.log ( num ); 
}
