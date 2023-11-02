// nested destructuring 
const users =[
    {userId : 1, firstName : "Sanju", gender:"male"},
    {userId : 2, firstName : "rathour", gender:"male2"},
    {userId : 3, firstName : "Singh", gender:"male3"},
]
// const [{firstName }, , {gender}] = users;
// console.log(firstName);
// console.log(gender);

// if you want to change variable name

const [{firstName : var1}, , {gender :user3gender}]= users;
console.log(var1);
console.log(user3gender);