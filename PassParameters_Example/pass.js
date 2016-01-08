//require the events module
var event = require('events');

//create a new event object
var myEvent = new event();

//when myEvent recieves hello it reads the parameters and logs them
myEvent.on('hello', function(a,b){
   console.log('==recieved data for event ==');
   console.log(a.val);
   console.log(b.val);
});

//use set interval for myEvent to emit 'hello' as well as 2 parameters as objects
setInterval(function(){
myEvent.emit('hello',
   a={val:Math.random()*100},
   b={val:Math.random()*200}
)},2000);
