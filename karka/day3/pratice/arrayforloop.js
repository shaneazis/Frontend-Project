let a=[1,2,3,4,5,6,7,8,9,11,22,33,12,24,35,56,67]
let even=[]
let odd=[]
for(let i=0;i<a.length;i++){
    
    let b=a[i]
    if(b%2==0){
        even.push(b)
    }
    else{
        odd.push(b)
        
    }
    
    

    
    
}
console.log(even)
console.log(odd)
    
