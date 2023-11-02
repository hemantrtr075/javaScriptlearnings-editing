//  difference between dot and bracket notation
const key = "email";
const person = {
    name:"sanju",
    age:22,
    "person hobbies": ["guitar","sleeping","listening music"]
}
// console.log(person["person hobbies"]);
// person["key"]= "sanjurathour@gmail.com";
// console.log(person);

// here key is key but you have to 
// assign var key so remove the string mark i.e.
// person["key"] ---> person[key]

person[key]="sanjurathour@gmail.com";
console.log(person);
