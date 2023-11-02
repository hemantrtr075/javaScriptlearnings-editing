//  FOR EACH LOOP 

const coding = ['js','rb','python','cpp', 'java','etc'];
coding.forEach(function(val){
    //console.log(val);
})

coding.forEach((item)=>{
    // console.log(item);

})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr)=>{
//   console.log(item,arr,index);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName: "javaaa"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})