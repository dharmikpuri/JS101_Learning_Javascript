// Problem 4: Write a function to check if the char is a small case or not.
function checkchar(str){
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lower="abcdefghijklmnopqrstuvwxyz"
 for(let i=0;i<=str.length-1;i++){
    let bag=""
    for(let j=0;j<=lower.length-1;j++){
      if(str[i]==lower[j]){
        bag=bag+upper[j]
      }else if(str[i]==upper[j]){
        bag+=lower[j]
      }
    } if(bag==lower){
    console.log("Yes");
  }else{
    console.log("No");
  } 
  }
  }
checkchar("d")