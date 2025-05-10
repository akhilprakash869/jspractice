//encapsulation
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`my name is ${this.name}`);
    }
}
const person1=new person("akhoi",25);
person1.greet(); 
//array
const array=[1,2,3,4,5,6,6,1,2,3];
const [a,b,c,...d]=array;
console.log(a);
