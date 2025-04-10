// Create Array using Literal
console.log("Create Array using Literal");

let a1 = [];
console.log(a1);

let a2 = [1, 2, 3, 4];
console.log(a2);

console.log("\n");

// Create using new Keyword (Constructor)
console.log("Create using new Keyword (Constructor)");

let a3 = new Array(10, 20, 30);
console.log(a3);

console.log("\n");

// Note: A common error is faced while writing the arrays
console.log("A common error is faced while writing the arrays");

// Example 1
let a = [5];
console.log(a1);

// Example 2
let b = new Array(5);
console.log(a2);

console.log("\n");

//////////////////////////////////////////
// Basic Operations on JavaScript Arrays//
/////////////////////////////////////////

console.log("Basic Operations on JavaScript Arrays");

let arr = ["HTML", "CSS", "JS"];
console.log(arr);

console.log("\n");

// 1. Accessing Elements of an Array
console.log("1. Accessing Elements of an Array");

console.log(arr[0]);
console.log(arr[1]);

console.log("\n");

// 2. Accessing the First Element of an Array
console.log("2. Accessing the First Element of an Array");

let fst = arr[0];
console.log(fst);

console.log("\n");

// 3. Accessing the Last Element of an Array
console.log("3. Accessing the Last Element of an Array");

let lst = arr[arr.length - 1];
console.log(lst);

console.log("\n");

// 4. Modifying the Array Elements
console.log("4. Modifying the Array Elements");

arr[1] = "Bootstrap";
console.log(arr);

console.log("\n");

arr = ["HTML", "CSS", "JS"];

// 5. Adding Elements to the Array
console.log("5. Adding Elements to the Array");

// Add Element to the end of Array
console.log("Add Element to the end of Array");

arr.push("Node.js");
console.log(arr);

// Add Element to the beginning
console.log("Add Element to the beginning");

arr.unshift("Web Development");
console.log(arr);

console.log("\n");

arr = ["HTML", "CSS", "JS"];

//6. Removing Elements from an Array
console.log("6. Removing Elements from an Array");

// Removes and returns the last element
console.log("Removes and returns the last element");

lst = arr.pop();
console.log(lst);
console.log(arr);

// Removes and returns the first element
console.log("Removes and returns the first element");

fst = arr.shift();
console.log(fst);
console.log(arr);

arr = ["HTML", "CSS", "JS"];

// Removes 2 elements starting from index 1
console.log("Removes 2 elements starting from index 1");

arr.splice(1, 2);
console.log(arr);

console.log("\n");

arr = ["HTML", "CSS", "JS"];

// 7. Array Length
console.log("7. Array Length");

let len = arr.length;
console.log(len);

console.log("\n");

// 8. Increase and Decrease the Array Length
console.log("8. Increase and Decrease the Array Length");

// Increase the array length to 7
console.log("Increase the array length to 7");

arr.length = 7;
console.log(arr);

// Decrease the array length to 2
console.log("Decrease the array length to 2");

arr.length = 2;
console.log(arr);

console.log("\n");

arr = ["HTML", "CSS", "JS"];

// 9. Iterating Through Array Elements
console.log("9. Iterating Through Array Elements");

// Iterating through for loop
console.log("Iterating through for loop");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Iterating through forEach loop
console.log("Iterating through forEach loop");

arr.forEach((value) => console.log(value));

console.log("\n");

// 10. Array Concatenation
console.log("10. Array Concatenation");

let arr2 = ["Node.js", "Express.js"];

let concateArray = arr.concat(arr2);
console.log(concateArray);

console.log("\n");

// 11. Conversion of an Array to String
console.log("11. Conversion of an Array to String");

console.log(arr.toString());

console.log("\n");

// 12. Check the Type of an Arrays
console.log("12. Check the Type of an Arrays");

console.log(typeof arr);

console.log("\n");

// 13. Recognizing a JavaScript Array
console.log("13. Recognizing a JavaScript Array");

console.log("Using Array.isArray() method");

console.log(Array.isArray(arr));

console.log("Using instanceof method");

console.log(arr instanceof Array);
