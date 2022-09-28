//Problem 2 : Given a character in lower case print the upper case character

let arr="dharmik"
let bag=""
let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower="abcdefghijklmnopqrstuvwxyz"
for(let i=0;i<=arr.length-1;i++){
  
for(j=0;j<=lower.length-1;j++){
  if(arr[i]==lower[j]){
   bag+=upper[j]
  }
}
}console.log(bag)
