let a=[5, 10, 20, 2, 0, 33, 100, 90]
let b=[]

for(i=0;i<a.length;i=i+2){

b.push(a[i],a[i+1])
b.push(a[i]+a[i+1])
}console.log(b)