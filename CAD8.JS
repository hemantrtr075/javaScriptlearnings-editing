// CONTROL FLOW one:

//if 
// const isUserloggedIn = true ;
// const temprature = 41;

// if(temprature === 40){
//     console.log("less than 50");
// }else {
//     console.log("greater than 40");
// }

// console.log("execute");
// <,> <=, >=, ==,!=, ===,!==

const score = 200;
if(score >100){
    let power = "fly ";
    console.log(`use power: ${power}`);
}
//console.log(`use power: ${power}`);  // not accessible

const balance = 1000;
//if(balance>500) console.log("test");console.log("test2");

// if (balance <500){
//     console.log("less than 500");
// }else if (balance <750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userLoggedIn = true ;
const debitCad = true;
const loggedInFromGoogle = false ;
const loggedInFromEmail = true  ;

// if (userLoggedIn && debitCad && 2==2 && loggedInFromEmail){
//     console.log("allow to buy course");
// }

if (loggedInFromGoogle || loggedInFromEmail){
    console.log(`user logged in `);
}