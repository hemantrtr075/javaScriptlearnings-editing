// Immediately Invoked function expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB  CONNECTED`);
})();

((name) => {
    console.log(`2nd  DB CONNECTED`);
})();

(()=>{
    console.log(`3rd DB CONNECTED`);
})();
(()=>{
    console.log(`3rd DB CONNECTED`);
})();

(()=>{
    console.log("4th DB CONNECTED");
})();