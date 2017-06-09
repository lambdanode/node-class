/* coping part of a buffer into another pre-allocated buffer*/
var buf=new Buffer('this is the string in my buffer');
var slice=new Buffer(10);
var targetStart=0,
	sourceStart=10,
	sourceEnd=20;
buf.copy(slice, targetStart, sourceStart, sourceEnd);
console.log(slice.toString());