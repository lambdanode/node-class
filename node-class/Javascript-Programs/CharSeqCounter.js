
var seqChar = "aaaabbccddaaaa";
var seqCharArr = seqChar.split("");
var counter=1;
var i =0;
var tempHolder = '';

if(i==0){
 //  tempHolder = seqCharArr[i];
   i=i+1;
}

while(i<seqCharArr.length){

    if(seqCharArr[i-1] == seqCharArr[i]){
       counter = counter+1;
       i=i+1;
    }else{
      console.log(seqCharArr[i-1] , counter );
    //  tempHolder = seqCharArr[i];
      counter = 1;
      i=i+1;
    }

}
console.log(seqCharArr[i-1] , counter );