let keys=(args)=>{
    return args.reduce((a, b) => a.length > b.length ? a : b);
}
let fruits=['apple', 'cherry', 'banana', 'date']
console.log(keys(fruits))