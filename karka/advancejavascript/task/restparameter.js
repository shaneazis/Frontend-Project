let keys=(...args)=>{
    return args.reduce((digit,i)=>{
        return digit+i
    },0)
}
console.log(keys(1,2,3,4,5))