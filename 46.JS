//arrow function

const singhSanjuBirthday= () => {
    console.log("happy birthday to you ....");
}
const sumThreeNumbers =(number1,number2,number3) => {
    return number1 +number2 +number3;
}
const ans1 = sumThreeNumbers(2,8,5);
console.log("ans1:",ans1);

// isEven
// input: one number
// output: true, false

// const isEven =function(number){
//     if(number%2===0){
//         return true ;
//     }
//     return false;
// }
    const isEven = number=>  number%2 ===0;
    
console.log(isEven(4));
// or you can write like that 

// function isEven(number){
//  return number%2===0;
    
// }console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter

const  firstChar = anyString => anyString[0];
console.log(firstChar("xyz"));

// const firstChar = firstCharacter("xbc");
// console.log(firstChar);


// function
// input: array, target(number)
// output: index of target if target present in array 

const findTarget = (array, target) => {
    for (let i =0; i<array.length; i++){
        if(array[i]===target){
            return i ;
        };
    } return -1
}
const myArray = [1,3,8,90];
const ans3 =  findTarget(myArray ,8);
console.log("target:",ans3);