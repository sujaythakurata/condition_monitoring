
const exp = require('express');
const app = exp();

//run the server at port 3000 or the enviromental port
const port = process.env.PORT || 3000;
const http_server = app.listen(port,()=>{
	console.log('hello server is running at port '+port)
});

//path module 
const path = require("path");

//send all the static files
app.use(exp.static(path.join(__dirname,"public")));

//import the route module
const mainpage = require("./route/route");


//main page route METHOD = GET
app.use(mainpage.route);

//import socket.io to establish a secure connection with the user
const io = require("socket.io").listen(http_server);

//import emit Data module
const emitData = require("./modules/emitData");

//create a connection and handel the data
io.sockets.on("connection",emitData.emitData);
