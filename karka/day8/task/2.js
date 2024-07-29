let a=[5,3,1,2,3]
let b=3
let c=[]
let count=0
for(i=0;i<a.length;i++){
   
    if(a[i]==b){
    count++
    }else{
        c.push(a[i])}
    }for(j=0;j<count;j++){
        c.push("*")
    }
console.log(c)
