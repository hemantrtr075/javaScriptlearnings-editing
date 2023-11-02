// reduce mehtod 

const arr = [1,2,3,4,5,6,7,8,9,10]
const sum = arr.reduce((acc,curr)=>{
    return acc+curr;
})
//console.log(sum/arr.length);

const myNums= [1,2,3,4,5]
// const myTotal = myNums.reduce(function(acc, curr){
//     console.log(`acc: ${acc} & currvalue :${curr}`);
//     return acc+curr ;
// },0)
//console.log(myTotal);
const mytotal = myNums.reduce((acc,curr)=> {return acc+curr},0);
// console.log(mytotal);

const shoppingCart =[
    {
        itemName:" js course",
        price : 299
    },
    {
        itemName: "py course",
        price: 599
    },
    {
        itemName: "mobile dev course",
        price: 499
    },
    {
        itemName: "data science course ",
        price: 599
    }
]

const priceToPay = shoppingCart.reduce((acc,curr)=> {
  return acc + curr.price ;
    
},1);

console.log(priceToPay);