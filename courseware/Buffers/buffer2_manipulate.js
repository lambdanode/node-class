/*creating an empty buffer and manipulating it */
var buf=new Buffer(20);
buf[2]=5							//set byte 20 to 56
console.log(buf.length); 			//buffer is not resizeble
console.log(buf);
console.log(buf.toString());		//converting it to a utf-8 encoded string
console.log(buf.toString('base64'));//converting it into a string with different encoding

var buf1=new Buffer(256);
len=buf1.write('\u00bd + \u00bc = \u00be', 0);
console.log(len+ " bytes: ", + buf1.toString('utf8', 0, len));