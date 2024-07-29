let a=[1,2,3,4,5,0,6,0]
let b=0
for(i=0;i<a.length;i++){
    if(a[i]!=0){
        b=b+a[i]

    }else{
        break
    }
}console.log(b)