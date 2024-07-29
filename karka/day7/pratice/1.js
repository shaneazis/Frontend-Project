function arr(a){
    let b=[]

  for(i=0;i<a.length;i++){
    if(a[i]<0){
        b.push(a[i])
    }
  }return b
}let a=[5,2,-7,3,-2,-1]
let result=arr(a)
console.log(result)

