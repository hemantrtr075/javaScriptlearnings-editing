// rest parameteres

//  function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//  }
//  myfunc(1,2,3,4,5,6,7);
function addAll(...numbers){
    let total =0;
    for(let number of numbers){
        total = total +number;

    }
    return total;
}
 const ans = addAll(1,2,3,4,6) ;
   console.log( "total:", ans);