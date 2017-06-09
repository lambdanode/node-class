/* slicing an original buffer with 31 bytes into a new buffer that has 10bytes
   equal to the 10th to 20th bytes of the original buffer
*/
var buf=new Buffer('this is the string in my buffer');
console.log(buf.length);
var slice=buf.slice(10,20);
console.log(slice.length);
console.log(slice.toString());