// default parameters

// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b=0;
//     }
//      return a+b;
// }
function addTwo(a,b=1){
    return a+b;
}
const ans = addTwo(5);
console.log(ans);
// in case if you will not pass second argument then 
// it will take default b=1