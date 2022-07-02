<template> 
 <div></div> 
 </template> 
   <script> 
 //2. 模拟实现instanceof 
 const _instanceof = (left, right) => { 
 right = right.prototype; 
 left = left.__proto__; 
 while (true) { 
 if (left == null) { 
 return false; 
 } 
 if (left == right) { 
 return true; 
 } 
 left = left.__proto__; 
 } 
 }; 
 const arr = new Array(); 
 const obj = new Object(); 
 console.log(_instanceof(arr, Object)); 
 console.log(_instanceof(obj, Array)); 
 console.log(arr instanceof Object); 
 console.log(obj instanceof Object); 
 export default {}; 
 </script> 
   <style></style> 
