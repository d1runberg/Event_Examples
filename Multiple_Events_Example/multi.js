//require events module
var event = require('events');

//create an event object
var myEvent1 = new event();
//create a second event object
var myEvent2 = new event();


//myevent1 on recieving 'hello' logs the parameters and checks if a is even
//if the value is even then it triggers event2 to emit 'goodbye' or log done
myEvent1.on('hello', function(a,b){
   console.log('==recieved data for event 1==');
   console.log(a.val);
   console.log(b.val);

   if(a.val%2 ==0){
      //event2 emit goodbye
      myEvent2.emit('goodbye');
   }

   else {
      console.log('done at event 1');
   }
});
//when event2 recieves goodbye it console logs information, no data sent with event
myEvent2.on('goodbye',function(){
   console.log('===moved on to event 2===');
   console.log('no data to show for it');
});

//myEvent1 emits 'hello' and two objects as parameters
myEvent1.emit('hello',
   //change the val of a to make the logic word differently above
   a={val:2},
   b={val:3}
);
