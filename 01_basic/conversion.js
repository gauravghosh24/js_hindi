let score="33"

console.log(typeof(score));

let valueInNumber=Number(score);

console.log(typeof valueInNumber);

//in javascript we should be carefull of 

let s1="33abc"

console.log(typeof(s1));

let valueInNumber1=Number(s1);

console.log(typeof valueInNumber1);
console.log(valueInNumber1);//this is NaN not a number type so be carefull
//one intrestinf fact is the NaN is itself a number type 
//null is converted t0 0 
//true is 1

//""=>false;
//"jqsbdjb"=>true;

let q="";
console.log(Boolean(q));
let q1="gaurav";
console.log(Boolean(q1));