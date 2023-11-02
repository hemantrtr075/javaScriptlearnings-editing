// dates 

// let myDate = new Date();
//  console.log(myDate.toString());
//  console.log(datee); 
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23 ,14,3);
let myCreatedDate = new Date("01-14-2023");

// console.log(myCreatedDate.toLocaleString());
// // console.log(date1);
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay().toLocaleString());

`${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
})