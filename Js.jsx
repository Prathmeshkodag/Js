function One(name){
    console.log(`Hellom I am ${name}`)
}

function two(callbackfunction){
    callbackfunction("Prathmesh")
    console.log('From Pune')
}

two(One)

const a={name:'prathmesh',age:'22'}

console.log(a)

function Objj(name,city){
    this.name=name,
    this.city=city
}

const test=new Objj('Prathmesh','Pune')
const test1=Object.create(test)
console.log(test1.name)

console.log(test.city)



class Home{
    constructor(name,city){
        this.name=name
        this.city=city
    }
    greet(){
        console.log(`Hello I am ${this.name} and I Live in ${this.city}`)
    }
}

class Test extends Home{
       
   constructor(name,city){
    super(name,city) 

   }

   greet(){ 
    console.log(`Hello I am ${this.name} and I Live in ${this.city}`)
   }
    

   }
   
    
const test11=new Home('Prathmesh','Pune')
const test2=new Test('Prathmesh','Mumbai')
console.log(test11.greet())
console.log(test2.greet())



