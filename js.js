//Hoisting
getname()
console.log(x);
var x =10;
function getname(){
    console.log("Namaste javascript");
}
//functions
var s=10;
a();
b();
console.log(s);
function a(){
    var s=100;
    console.log(s)
};
function b(){
    var s=200;
    console.log(s);
};
