function singhSanjuBirthday(){
    console.log("happy birthday to you ....");
}
function sumThreeNumbers(number1,number2,number3){
    return number1 +number2 +number3;
}
const returnedValue = sumThreeNumbers(2,5,5);
console.log(returnedValue);

// isEven
// input: one number
// output: true, false

function isEven(number){
    if(number%2===0){
        return true ;
    }
    return false;
}
console.log(isEven(10));
// or you can write like that 

function isEven(number){
 return number%2===0;
    
}console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter

function firstCharacter(anyString){
    return anyString[0];
} console.log(firstCharacter("abc"));

// function
// input: array, target(number)
// output: index of target if target present in array 

function findTarget(array, target){
    for (let i =0; i<array.length; i++){
        if(array[i]===target){
            return i ;
        };
    } return -1
}
const myArray = [1,3,8,90];
const ans =  findTarget(myArray ,8);
console.log("target:",ans);