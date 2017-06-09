var util = require('util');
var EventEmitter = require('events').EventEmitter;

// Pseudo-class named ticker that will self emit every 1 second.
var Ticker = function()
{
    var self = this;
    setInterval(function()
    {
        self.emit('tick');
    }, 1000);   
};

// Bind the new EventEmitter to the pseudo class.
util.inherits(Ticker, EventEmitter);

// call and instance of the ticker class to get the first
// event started. Then let the event emitter run the infinite loop.
var ticker = new Ticker();
var tickListener = function() {
    console.log('Tick');
};
ticker.on('tick', tickListener);

(function tock()
{
    setTimeout(function()
    {
        console.log('Tock');
        ticker.removeListener('tick', tickListener);
        console.log("Clocks Dead!");
    }, 5000);
})();