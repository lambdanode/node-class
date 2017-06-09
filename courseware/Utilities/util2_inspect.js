/* inspect function can aid in quick debugging by inspecting and printing an object properties.
   Also for keeping track of visited objects
*/
var util=require('util');
var a={1: true, 2: false};
console.log(util.inspect(a));
/* util.inspect accepts more arguments
   showhidden - shows non-enumerable properties that belong to the object prototype chain,
                not the object itself
   depth - shows the default depth on the object graph, useful for inspecting large objects
           To recurse indefinitely pass a null value
*/
console.log(util.inspect(a, showHidden=true, depth=2, showColors=true));