
var charCount = "aaaabbbbxxgglllaaaa";

var myMap = new Map();

// console.log(charCount);
var charCountArr = charCount.split("");

// console.log(charCountArr);

for(var i = 0 ; i< charCountArr.length ; i++){

if(myMap.get(charCountArr[i])!= undefined){
  var parsedValue = myMap.get(charCountArr[i]);
 
  myMap.set(charCountArr[i],parsedValue+1);
}else{
   myMap.set(charCountArr[i],1); 
}


}
console.log(myMap);







