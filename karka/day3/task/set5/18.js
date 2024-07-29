// let a=100
// let b=20
// let c=111
// if(a>=b && a>=c){
//     console.log(a)
// }
// else if(b>=a && b>=c){
//     console.log(b)
// }
// else{
//     console.log(c)
// }
function gre(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    else{
        return c
    }
}let result=gre(10,15,5)
console.log(result)