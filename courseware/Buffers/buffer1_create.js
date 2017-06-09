/* creating a buffer from utf-8 encoded string
   utf-8 is default encoding for node*/
var buffer1=new Buffer('Hello World');
console.log(buffer1);
console.log(buffer1.toString());

/* creating a buffer from string with different encoding 
    like ascii, base64 */
var buffer2=new Buffer('8b76fde713ce', 'base64');
console.log(buffer2);
console.log(buffer2.toString('base64'));

