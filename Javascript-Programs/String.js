var carname = "Volvo XC60";


function findPalindrome(myString){

 
var myStringArr = myString.split("");
   console.log(myStringArr);
for(var i=0;i<myStringArr.length/2 ; i++){
if(myStringArr[i]== myStringArr[((myStringArr.length-1)-i)]){
    
}else{
   return myString + " is not a Palindrome"
}
  return myString + " is a Palindrome"
}
}



console.log(findPalindrome("malayalam"));
