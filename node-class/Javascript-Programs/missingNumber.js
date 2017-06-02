
var i=0;
var sum=0;
var n=7;
var a=[1,2,3,4,6,7];

for(i=0;i<a.length;i++){
sum=sum+a[i];
}
console.log(sum);
console.log('Duplicate Number -- ', sum-(n*(n+1)/2));
console.log('Missing Number -- ', (n*(n+1)/2) - sum);
