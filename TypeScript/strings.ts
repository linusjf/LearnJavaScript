#!/usr/bin/env ts-node
const obj1 = new String("Swift");
const concobj2 = " in 8 Hours";
const myStr = obj1 + concobj2;
console.log(myStr);
const kotlin = new String("Kotlin in 8 Hours!");
// get the string length
const len = kotlin.length;
console.log("The length is: " + len);
const num1 = 100;
const num2 = 200;
const str1 = num1.toString();
const str2 = num2.toString();
// connect two strings
const str3 = str1 + str2;
console.log(str3);
const htmlobj = new String("HTML");
// create a string object “obj”
console.log("obj.charAt(0) is: " + htmlobj.charAt(0));
console.log("obj.charAt(1) is: " + htmlobj.charAt(1));
console.log("obj.charAt(2) is: " + htmlobj.charAt(2));
console.log("obj.charAt(3) is: " + htmlobj.charAt(3));
const str11 = new String("Django");
const str21 = new String(" in 8 Hours");
const str31 = str11.concat(str21.toString());
console.log(str31);
var str = new String("Kotlin in 8 Hours");
const idx = str.indexOf("in");
console.log("The index is: " + idx);
str = new String("Kotlin in 8 Hours");
const indx = str.lastIndexOf("in");
console.log("The index is: " + indx);
const oldstr = "JavaScript";
var newstr = "TypeScript";
const mystr = oldstr.replace(oldstr, newstr);
console.log(mystr);
str = "Shell Scripting in 8 Hours";
newstr = str.substring(6, 15);
console.log("The substring is:  " + newstr);
str = new String("PERL");
console.log("P Unicode is: " + str.charCodeAt(0));
console.log("E Unicode is: " + str.charCodeAt(1));
console.log("R Unicode is: " + str.charCodeAt(2));
console.log("L Unicode is: " + str.charCodeAt(3));
str = "Swift in 8 Hours";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
const singleQuotes: string = "single";
const doubleQuotes: string = "double";
const templateString: string = `I am ${singleQuotes}`;
// I am single
console.log(templateString);
const templateString2: string = `I am ${doubleQuotes}`;
console.log(templateString2);
