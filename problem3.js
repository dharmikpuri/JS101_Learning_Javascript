//Problem 3 : Given an array of numbers find the average of all the even numbers.
let arr=[1,2,3,6,7,5,9,76]
let sum=0;
let count=0;

for(let i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum=sum+arr[1]
    count++
  }
}
 console.log(sum/count);