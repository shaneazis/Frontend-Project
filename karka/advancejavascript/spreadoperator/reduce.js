let a=[1,2,3,4]
let sum=a.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
},0)
console.log(sum)