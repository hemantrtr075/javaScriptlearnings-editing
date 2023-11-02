// spread operator 
// const array1 = [ 1,2,3];
// const array2 = [5,6,7];

// const newArray = [...array1 , ...array2, 89, 90];
// console.log(newArray);

//spread operator in objects 
const obj1 = {
    key1: "value1",
    key2: "value2"

};
const obj2 ={
    key1: "dobara",
    key3: "value3",
    key4: "value4"
};
// if same key will be there then last key will print 
// const newObject = {...obj1 , ...obj2, key20: "value20" };
// console.log(newObject);
// const newObject2 = {...["item1", "item2"]};
const newObject2  ={..."abcdefghijklmnopqrstuvwxyz"}
console.log(newObject2);