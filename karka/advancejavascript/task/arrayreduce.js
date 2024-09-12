let a=[1,2,3,4,5]
let b=a.reduce((data,i)=>{
    return data*i
},1)
console.log(b)