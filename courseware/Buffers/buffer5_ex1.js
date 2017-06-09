/* creating an uninitialised buffer with 100 bytes and fill it with bytes 
   with values starting from 0 to 20. and then print its contents.
*/
var buf=new Buffer(20);
for(var i=0; i<20; i++){
	buf[i]=i;
}
console.log(buf);
/* slicing the above buffer with bytes ranging from 10 to 20. 
   And then printing it
*/
console.log(buf.slice(10, 20));
/* coping bytes ranging 10 to 20 into a new buffer. 
   And then printing it
*/
var buf3=new Buffer(10);
buf.copy(buf3, 0, 10, 20);
console.log(buf3);