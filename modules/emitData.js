 
 //import db for database connection and fetch the data
 const db = require('./fetch_data');

//send the data to the client via websocket
 exports.emitData = function (socket){
    console.log("a user is connected");
    socket.on("disconnect", function(){
    	console.log("a user is disconnect");
    })
    db.db((data)=>{
    	socket.emit("msg", data);
    });
    db.acc_data((data)=>{
    		socket.emit("acc_data", data);
    });
}