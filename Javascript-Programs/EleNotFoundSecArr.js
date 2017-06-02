
var arr1 = [8,9,10,11,13,15];
var arr2 = [10,8,9,11,15];
var ifPresent = false;

     for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
              ifPresent = true;
             break;
            }else{
                
            }
               
          
        }
        
         if(!ifPresent){
          console.log(arr1[i], 'is not present in the second array');
        }

        ifPresent = false;
       
     }

