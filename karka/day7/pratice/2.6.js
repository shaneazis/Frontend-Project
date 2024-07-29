let a=544
let b=0
let c=0
let d=0

for(i=0;i<10;i++){
    b=a%10
    c=a-b
    d=c/10
    a=d+b
    
}
console.log(a)