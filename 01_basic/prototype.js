//prototype based and class-object based
//initially  the js waws purely protype based 
//prototype is refered to as the propereties of the datatype

let computer={
    cpu:12,
    ram:16
}
let lenovo={
    screen:"HD",
    __proto__:computer //all the properties of the computer is being added to it 
};
let tomHardware={}
console.log(`computer`,computer.__proto__)//do not show the default properties
console.log(`lenov0`,lenovo.__proto__)//now show the custome property 

//there is a better way of doing things

let generiCar={
    tyre:4
}
let tesla={
    Driver:"AI"
}

Object.setPrototypeOf(tesla,generiCar);
console.log(`tesla`,Object.getPrototypeOf(tesla))//show the explecit one not its own

console.log(`tesla`,Object.getOwnPropertyNames(tesla));