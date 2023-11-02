//function inside function

function app(){
    const myfunc =() =>{
        console.log("hello from myfunc");
    }
    const addTwo = (num1, num2) => num1 + num2;
    const mul = (num1 ,num2) => num1*num2;
    myfunc();
    console.log("inside app");
    console.log(addTwo(2,3));
    console.log(mul(2,5));
    
}app();