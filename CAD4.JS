// FUNCTION

function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("u");

}
//sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// const result = addTwoNumbers(5,3);
// console.log(result);

// function addTwoNumbers(number1,number2){
//         // let result = (number1+number2);
//         // return result;
//         return number1+ number2
//     }
//     const result = addTwoNumbers(5,3); 
//      console.log(result);

// function loginUserMessage(username ="rathour"){
//     if(username === undefined){// !username is also same ===
//         console.log("please enter username");
//         return;
//     }return `${username} just logged in`;
// }console.log(loginUserMessage());

// function calculatCartPrice(val1, val2, ...num1){
//     return val1 + val2 + num1;
// }console.log(calculatCartPrice(200,400,500,));

// const user= {
//     username : "sanju",
//     price :199
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${user.price}`);
// // you can write both user or anyobject in .notation access
// }
// handleObject(user);

const myNewArray = [200,400,100,600];
function returnThirdValue(getArray){
    return getArray[2];
}
 console.log(returnThirdValue(myNewArray));
 console.log(returnThirdValue([1,2,3,4,5]));