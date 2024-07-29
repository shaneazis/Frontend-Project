let a=[5,10,15,20,25]
let b=[]
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        a[i]=0
    }else{
        a[i]="*"
    }
}console.log(a)