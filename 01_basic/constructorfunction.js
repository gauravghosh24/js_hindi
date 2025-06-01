function Car(make,model){
    this.make=make
    this.model=model
}

let myCar=new Car("BMW","XM");//the new keyword is use to create an object of the constuctor function 
console.log(myCar);

function Tea(type){
    this.type=type
    this.describe=function(){
        console.log(`This is a cup of ${this.type} Tea`)//this have to be used as it refer to the object which changes
    }
}

let lemon=new Tea("Lemon")
lemon.describe()

let black=new Tea("Black")
black.describe()