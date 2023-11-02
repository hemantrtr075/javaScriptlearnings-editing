// ARROW FUNCTION AND THIS KEYWORD

// const user ={
//     username : "sanju",
//     price: 999,

//     welcomeMessage : function (){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
//  user.welcomeMessage();
// user.username = "rathour";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "sanju";
//     console.log(this.username);  //  undefined 
// }
// chai();

// const chai = function(){
//     let username = "sanju";
//     console.log(this.username);
// }  
//   chai();

//   const chai =() => {
//     let username = "sanju";
//     console.log(this.username);
//   }
//   chai();

//   const addTwo = function (num1,num2){
//     return num1+ num2;
//   }

//  const addTwo = (num1,num2) =>{
//     return num1+num2;
//  }

// const addTwo = (num1,num2) => num1 +num2;

// const addTwo = (num1,num2) =>(num1+num2)
// console.log(addTwo(2,5));

const addTwo = (num1, num2)=> (num1 + {username: "sanju"})

  console.log(addTwo(1));


 