var input="stress";
var count=0;
/*
for(var i=0;i<input.length-1;i++)
{
    for(var j=0;j<=input.length-1;j++)
    {
        if(input.charAt(i)==input.charAt(j))
         {
                count++;
         }
     
    }
   // console.log(input.charAt(i) , count);
if(count==1)
{
    console.log(" non repeated character is="+input.charAt(i));
    break;
}
count =0;
}
*/

var string="stress";
for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == string.lastIndexOf(c)) {
         console.log(c);
    }
}