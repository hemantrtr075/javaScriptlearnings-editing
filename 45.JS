// function expression
const singhSanjuBirthday= function(){
    console.log("happy birthday to you ....");
}
const sumThreeNumbers =function(number1,number2,number3){
    return number1 +number2 +number3;
}
const returnedValue = sumThreeNumbers(2,5,5);
console.log("sumThreeNumber:",returnedValue);

// isEven
// input: one number
// output: true, false

const isEven =function(number){
    if(number%2===0){
        return true ;
    }
    return false;
}
console.log(isEven(1));
// or you can write like that 

// function isEven(number){
//  return number%2===0;
    
// }console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter

const  firstCharacter= function(anyString){
    return anyString[0];
} 
const anss = firstCharacter("xbc");
console.log(anss);


// function
// input: array, target(number)
// output: index of target if target present in array 

const findTarget = function(array, target){
    for (let i =0; i<array.length; i++){
        if(array[i]===target){
            return i ;
        };
    } return -1
}
const myArray = [1,3,8,90];
const ans =  findTarget(myArray ,8);
console.log("target:",ans);