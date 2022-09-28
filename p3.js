// Problem 3: Use the same function to print Non-Primes from 2 to a given limit..

// let num=18;

// for(let i=1;i<=num;i++){
//   let count=0;
//   for(let j=1;j<=i;j++){
//     if(i%j==0){
//       count++
//     }
//   } if(count!==2){
//    console.log(i,"Not a Prime");
//   }
// }




function NonPrimes(num){
  for(let i=2;i<=num;i++){
  let count=0;
  for(let j=2;j<=i;j++){
    if(i%j==0){
      count++
    }
  } if(count!==1){
   console.log(i,"Not a Prime");
  }
}
}
NonPrimes(18);





