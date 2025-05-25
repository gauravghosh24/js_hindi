//premetive 

//7 types string  number boolean null  symbol(to make unique) BigInt


const id=Symbol('123');
const anotherid=Symbol('123');
console.log(id===anotherid);//false 

const bignumber=1234563487489n;
console.log(typeof bignumber);
//by using n at the end it is converted into bigint 



//Dynamically type language (no need to specify data type )

//Reference type non premetive 

//array objects Functions

const heros=["IronMan","Naagraj","Doga"];
//objects are stored in { key:value}
let myObj={
    name:"Gaurav",
    age:20,
}
console.log(myObj);
console.log(heros);

console.log(typeof myObj);
console.log(typeof heros);

const func=function(){
    console.log("Hello My user");
}
console.log(func());
console.log(typeof(func));
