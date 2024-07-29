let a=[1,2,4,5,6,7]
let b=false

for(i=0;i<a.length;i++){
for(j=i+1;j<a.length;j++){
    if(a[i]===a[j]){
     
    b=true
    break
    
}
}
if(b)break
}


console.log(b) 
