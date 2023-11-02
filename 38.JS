//how to iterate object 
const person = {
    name: "sanju",
    age: 22,
    "person hobbies": ["guitar","sleeping","listening music"]
}

// for in loop 
// object.keys

// for(let key in person){
//     console.log(person[key]);
// }

// if you want to print complete key pair 

// for(let key in person){
//    // console.log(`${key} : ${person[key]}`);
//     console.log(key, ":", person[key]);
// }

console.log(typeof (Object.keys(person)));
// const val = Array.isArray(Object.keys(person));
// console.log(val);
// //(Object.keys(person)--> it will print keys into array

for(let key of Object.keys(person)){
    console.log(person[key]);
}