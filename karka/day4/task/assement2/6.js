// let a=38
// for(;a>10;){
//   let b=0
// for(j=a;j>0;){
//     b+=j%10
//     j=(j/10) |0
// }
// a=b
// console.log(a)

// }
let a=38
while(a>=10){
  let b=a%10
  let c=a-b
  let d=c/10
  a=d+b

}
console.log(a)