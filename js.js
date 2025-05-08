function a(){
    var x=30;
    function b(){
        var y=40;
        function c(){
            console.log(x,y);

        }
       c();
    }
   b();
}
a();
// encapsulation
class  Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello ,my name is ${this.name}`);
    }
}
const person1=new Person("Akhil",25);
person1.greet();