let a=[1,2,3,0,5,6,7,0,9]
let b=0
for(i=0;i<a.length;i++){
if(a[i]!=0){
    b=b+a[i]
}
else{
    break
}

}
console.log(b)