// Problem 5: Write a function to replace spaces in a given string with - .

function replacespace(str){
  let bag="";
for(let i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    bag=bag+"-"
  }else{
    bag=bag+str[i]
  }
}return bag;
}
console.log(replacespace("dh arm ik"))


// let str="dh ar mi k";
// let bag="";
// for(let i=0;i<=str.length-1;i++){
//   if(str[i]==" "){
//     bag=bag+"-"
//   }else{
//     bag=bag+str[i]
//   }
// }console.log(bag);

