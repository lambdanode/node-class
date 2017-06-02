
var longestPalindromeStr = "My madam told me to learn malayalam and spell racecar ";
    longPalinArr = longestPalindromeStr.split(" ");
    var listOfPalind = [];
    var lengthTemp = 0;
    var longstPalindrome='';

    for(i=0 ; i<longPalinArr.length;i++){
           if( findPalindrome(longPalinArr[i]) ){
              listOfPalind.push(longPalinArr[i])
           }
    }

  

    for(var j =0 ;j<listOfPalind.length;j++){

      if( lengthTemp < listOfPalind[j].length ){
         longstPalindrome = listOfPalind[j];
         lengthTemp = listOfPalind[j].length;
      }

    }

    console.log('Longest Palindrome is -- ',longstPalindrome)

    function findPalindrome(myString){

 
        var myStringArr = myString.split("");

        for(var i=0;i<myStringArr.length/2 ; i++){
        if(myStringArr[i]== myStringArr[((myStringArr.length-1)-i)]){
    
        }else{
                 return false;
        }
                return true;
        }
    }

     