const array=[1,2,3,4,5,6,5,6,4]
const result=array.filter((value,index,set)=> set.indexOf(value)==index
)
console.log(result)