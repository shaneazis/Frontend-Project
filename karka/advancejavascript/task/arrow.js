let a=[1,2,3,4,5]
let b=[]
let mul=((a)=>{
    for(i=0;i<a.length;i++){
    let c=a[i]**2
    b.push(c)
   
}
console.log(b)
}
)
mul(a)


function mul(a){
    for(i=0;i<a.length;i++){
        let c=a[i]**2
        b.push(c)
    }
    console.log(b)
}
mul(a)