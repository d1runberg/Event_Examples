var emitter = require('events');

var myEvent = new emitter();

myEvent.on('hello', function(){
   console.log('event trigger!');
});

setInterval(function(){
   myEvent.emit('hello');
},1000);
