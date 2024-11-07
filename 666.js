socket.emit('command', {list:['name','666']})
socket.emit('command', {list:['color','red']})
document.getElementById('content').style.backgroundColor = 'red';
javascript:setInterval(function(){socket.emit('talk', {text:'666 666 666 666 666 666 666 666 666 666  '})},150);
