// Parametere destructuring 

// object
// react  me use hota hai

const person ={
    firstName : "sanju",
    gender   : "male",
    age      : 500
}
  
//    function printDetails(obj){
//       console.log(obj.firsName);
//       console.log(obj.gender);
//    }
//    printDetails(person);
 
function printDetails( {firstName , gender  , age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);