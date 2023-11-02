// FOR OF 
// ["","",""]
// [{},{},{}]

const arr = ["a","b","c","d","e"]
for(const num of arr){
   // console.log(num);

}

for(const num in arr){
  //  console.log(num);
}

const greetings = "Hello world";
for(const greet of greetings){
   // console.log(greet);
}
for(const index  in greetings){
   // console.log(index);
}

// MAPS

const map = new Map ();// capial Map();
map.set('in',"india");
map.set('mybest number',7);
map.set('language',"Hindi");

// console.log(map.get('in'));
// console.log(map);
map.set('in',"bharat");
// console.log(map.get('in'));
// console.log(map.size);

for (const [key,value] of map ){
    // console.log(key,":",value);
}

const myObj={
    game1 : 'nfs',
    game2 : "spiderman"
}
{for(const key in myObj){
   // console.log(key,":",myObj[key]);
}
//  for(const [key, value] of myObj){
//    // console.log(key, value); // error 
//  }
 // for of loop is not iterable for object 
}
 const myObject ={
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift : "swift by apple"
 }
 for(const key in myObject ){
  console.log(`${key} is short of ${myObject[key]}`);
 }

 const programming = ['js','rb','java','py','cpp'];
 for(const key in programming){
    console.log(programming[key]);
 }