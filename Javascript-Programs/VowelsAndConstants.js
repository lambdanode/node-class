

var vowelsAndConstants = ['a','b','c','d','e','f','i','o','f','u','a','z','e','o','k','x','y'];
var i = 0;
var vowelCount = 0;
var consonentCount = 0;
   while(i<vowelsAndConstants.length){

       if(vowelsAndConstants[i] == 'a' || vowelsAndConstants[i] == 'e' ||
       vowelsAndConstants[i] == 'i' || vowelsAndConstants[i] == 'o' ||
       vowelsAndConstants[i] == 'u' ){
            vowelCount = vowelCount+1;
       }else{
           consonentCount = consonentCount+1;
       }

       i=i+1;
   }

   console.log('vowel Count -- ' , vowelCount);
   console.log('Consonent Count -- ' ,consonentCount );