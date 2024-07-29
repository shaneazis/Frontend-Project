
// for( let i=0;i<nums.length;i++){
//     if(nums[i]==3)
//         nums[i]="_"
    
        
//      for(j=i+1;j<nums.length;j++){
//         if(nums[j]!=3 && nums[j]!="_"){
//             nums[i]=nums[j]
//             nums[j]="_"
//             break
//         }}
//      }
let a=[3,2,2,2,3,3,3,3]
let b=3
let c=[]
let count=0


for(i=0;i<a.length;i++){
    if(a[i]==b){
        count+=1
      }
    else{
        c.push(a[i])
    }
}

for(j=0;j<count;j++){
    c.push("*")
}
console.log(c);