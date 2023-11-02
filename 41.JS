// object destructuring 
const band ={
    bandName : "led zepplin",
    famousSong: "stairway to heaven",
    year : 1968,
    anotherFamousSong: "kashmir",
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName , famousSong);
// const { bandName , famousSong} = band;
// console.log(band);
let {bandName,famousSong , ...restProps} = band;
console.log(bandName);
console.log(restProps);