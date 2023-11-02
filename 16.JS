// And or operator

let firstName = "sanju";
let age = 16;

// if (firstName[0]=== "S"){
//     console.log("your name starts with S");
// }else{
//     console.log("starts with another later ");
// }

// if (age >18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "S" && age>18){
//     console.log("name starts with S and above 18");
// } else {
//     console.log(" both condtion not true");
// }
// it will execute only when both cond. true 

if(firstName[0] === "S" || age>18){
    console.log("name starts with S and above 18");
} else {
    console.log(" both condtion not true");
}
// it will execute when any one condition is ture 