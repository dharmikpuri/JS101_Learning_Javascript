// Problem 1: Create a function to check if a number is Prime or Not

// let num=17;
// for(let i=1;i<=num;i++){
//  let count=0;
// for(let j=1;j<=i;j++){
//   if(i%j==0){
//     count++
//   }
// }if(count==2){
//   console.log(i,"Prime");
// }else{
//  console.log(i,"Is not Prime");
// }
// }

// function PrimeorNot(num) {
//   for (let i = 1; i <= num; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j == 0) {
//         count++
//       }
//     } if (count == 2) {
//       console.log(i, "Prime");
//     } else {
//       console.log(i, "Is not Prime");
//     }
//   }
// }
// PrimeorNot(23)


let checkPrime = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  } if (count == 2) {
    console.log("true");
  } else{
    console.log("false");
}
}
checkPrime(13);