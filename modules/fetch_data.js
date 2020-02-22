const db = require('./database_config');
const conn = db.db_connect();
exports.db = (_callback)=>{
	const query = "select * from Sensor_node_table where id = (select max(id) from Sensor_node_table)";
	setInterval(()=>{
		conn.query(query, (err, res, fields)=>{
			if (err) throw err;
			_callback(res);
		});		
	}, 100);

};
exports.acc_data = (_callback)=>{
	let id = 0;
	setInterval(()=>{
		const query = "select Ax, Ay, Az, Gx, Gy, Gz, M from Sensor_node_table ORDER BY ID DESC limit 1000";
		conn.query(query, (err, res, fields)=>{
			if (err) throw err;
			_callback(res);
		});		
	}, 100);

}

