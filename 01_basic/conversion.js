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

//////////////operation/////////\
console.log(1+2+'3');
console.log("1"+2+2);
//what come first it is converted to that 
console.log(+true);
console.log(+"");

//prefix and postfix
let a=10;
let b=a++;
let c=++a;
console.log(b);//postfix first it assign the value then increment 
console.log(c);//prefix it increment the value the assign it to the variable 

//comoparisons
console.log(null>0);
console.log(null==0);
console.log(null>=0);//confusing so plz avoid 


//the reason is that an equality check == and compariosn >,<,>=,<= work differntlt
//compariosn convert null to a number ,treating it as 0
//That is why null >=0 is true and null>0 is false

//=== strict check also check the datatype