const sum=(...arg)=>{
    return arg.reduce((acc, current) => acc + current, 0);
}
const arg=[1,2,3,5,6,7]
console.log(sum(...arg))
