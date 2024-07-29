let a=[1,0,2,3,0,4,5,0]
let b=[]
let c=a.length
for(i=0;i<a.length;i++){
    if(a[i]==0){
        b.push(a[i],0)
    }else{
        b.push(a[i])
    }
}
b.length=c
console.log(b)