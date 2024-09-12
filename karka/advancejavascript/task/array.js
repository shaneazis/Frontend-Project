let a=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
// function filterwords(a){
//     return a.filter(b=>b.length>5);
// }
// console.log(filterwords(a))
let b=a.filter((data)=>{
    return data.length>5

})
console.log(b)