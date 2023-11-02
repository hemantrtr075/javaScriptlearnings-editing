// lexical scope 
// if you create function inside funtion and you want to print
// that variable so it will chek first where is variable 
// if inside function there is no variable then it will go 
// outside the function and check in lixical scope . if 
// variable not found in lexical scope then it willcheck 
// global scope but it will print that variable by finding 
// in every scope 

 const myVar = "value1";
function myApp(){

    function myfunc(){
       // const myVar ="value59";
        const myfunc2 =() => {
            console.log("inside myfunc", myVar);
        }
        myfunc2();
    }
    console.log(myVar);
    myfunc();

}myApp();