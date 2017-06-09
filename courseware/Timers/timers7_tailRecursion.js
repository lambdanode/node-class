/* to ensure that no two async calls overlap,
 use tail recursion instead of setInterval
 */
(function schedule(){
 setTimeout(function async(){
 	console.log('async is done');

 	schedule();  // aync wont be called every second but 1sec after the last one finished
 }, 1000);
})();