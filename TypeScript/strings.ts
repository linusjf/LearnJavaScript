#!/usr/bin/env ts-node
var obj1 = new String("Swift"); 
var concobj2 = " in 8 Hours"; 
var myStr = obj1 + concobj2; 
console.log (myStr);
var kotlin = new String("Kotlin in 8 Hours!");
// get the string length 
var length = kotlin.length;
console.log("The length is: " + length);
var num1 = 100; 
var num2 = 200; 
var str1 = num1.toString(); 
var str2 = num2.toString(); 
// connect two strings 
var str3 = str1 + str2;
console.log ( str3 );
var htmlobj = new String("HTML");  
// create a string object “obj” 
console.log("obj.charAt(0) is: " + htmlobj.charAt(0)); 
console.log("obj.charAt(1) is: " + htmlobj.charAt(1));  
console.log("obj.charAt(2) is: " + htmlobj.charAt(2));  
console.log("obj.charAt(3) is: " + htmlobj.charAt(3));
var str11 = new String( "Django" ); 
var str21 = new String( " in 8 Hours" ); 
var str31 = str11.concat(str21.toString()); 
console.log(str31);
var str = new String( "Kotlin in 8 Hours" ); 
var idx = str.indexOf( "in" ); 
console.log("The index is: " + idx);
var str = new String( "Kotlin in 8 Hours" ); 
var indx = str.lastIndexOf( "in" ); 
console.log("The index is: " + indx);
var oldstr = "JavaScript"; 
var newstr = "TypeScript"; 
var mystr = oldstr.replace( oldstr, newstr ); 
console.log( mystr );
str = "Shell Scripting in 8 Hours"; 
var newstr = str.substring(6, 15); 
console.log("The substring is:  " + newstr);
str = new String("PERL"); 
console.log("P Unicode is: " + str.charCodeAt(0)); 
console.log("E Unicode is: " + str.charCodeAt(1)); 
console.log("R Unicode is: " + str.charCodeAt(2));  
console.log("L Unicode is: " + str.charCodeAt(3));
str = "Swift in 8 Hours"; 
console.log(str.toLowerCase( ));
console.log(str.toUpperCase( ));
let singleQuotes: string = 'single'; 
let doubleQuotes: string = "double"; 
let templateString: string = `I am ${ singleQuotes }`; 
// I am single
console.log(templateString);
