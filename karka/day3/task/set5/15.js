let a=[1,2,3,5,8,9]
let b=1
for(i=0;i<a.length;i++){
   for( let c=a[i];c>a[i]-1;c--){
      b=b*c
   }
   
  
   console.log(b)
}