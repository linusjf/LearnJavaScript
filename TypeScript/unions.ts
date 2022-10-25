function whatTime(hour:number|string, minute:number|string):string { 
  return hour+':'+minute; 
}
console.log(whatTime (1,30));
console.log(whatTime('1',30));
console.log(whatTime(1,'30'));
console.log(whatTime('1','30')); 
