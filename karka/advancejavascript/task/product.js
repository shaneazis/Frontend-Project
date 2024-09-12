let keys=(...args)=>{
    return args.reduce((digit,i)=>{
        return digit*i
    },1)
}
console.log(keys(1,2,3,4,5))