// array push pop 
// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// // push
// fruits.push("banana");
// console.log(fruits);
// // pop
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);
// // pop will return alos value

// unshift 
//    fruits.unshift("banana");
//    fruits.unshift("myfruit");
//    console.log(fruits);

// shift
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is",removedFruit);
// shift will also cut and return the value 
// push will insert in last and pop will cut 
// the last value and will return the value 

//unshift will insert value in starting and shift
// will cut value from starting and shift will
// return the value 

// * push pop is fast compared to shift unshift*