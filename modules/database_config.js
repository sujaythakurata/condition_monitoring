const mysql_driver = require("mysql");

exports.db_connect = ()=>{
const db_connect = mysql_driver.createConnection({
	host: 'localhost',
	user: 'sujay_php',
	password: "Sujay@1234",
	database: "Sensor_node",
	port: '3306'
});
db_connect.connect((err)=>{
	if (err){
		console.log("there is some problem",err);
		};
	console.log("connect with database");
});
	return db_connect;
};