let a=[1,2,3,4,5,1,7]
let b=[]


for(i=0;i<=a.length;i++){
    let c=false
    for(j=0;j<a.length;j++){
        if(a[i]===b[j]){
            c=true
            
        }
    }if(c==false){
        b.push(a[i])
    }

}console.log(b)