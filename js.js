
//function currying
function add(x)
{
  return function(y){
    return function(z){
      return x+y+z;
    }
  }
}
console.log(add(10)(10)(10))
