const express=require('express');
const routes=require('./routes/index');

const server=express();
server.use(routes);

server.listen(3000, function(){
	console.log('server listening at port 3000');
});