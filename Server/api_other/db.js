var mysql = require('mysql');

var infoConnect = {
	host: 'us-cdbr-iron-east-01.cleardb.net',
	port: '3306',
	user: 'bcbff17ba4cbfa',
	password: '191e57f2',
	database: 'heroku_cb63d0a58570ed4'
	// host: 'localhost',
	// //connectionLimit: 10,
	// port: '3306',
	// user: 'root',
	// password: '',
	// database: 'chamsockhachhang',
};


exports.load = function(sql) {
	return new Promise((resolve, reject) => {
		var connection = mysql.createConnection({
			host: infoConnect.host,	port: infoConnect.port, user: infoConnect.user, password: infoConnect.password, database: infoConnect.database
		});
		connection.connect();

		return connection.query(sql, (error,results,fields) => {
			if(error) 
				reject(error);
			else resolve(results);
			connection.end();
		});
	});
}

exports.write = function(sql) {
	return new Promise((resolve, reject) => {
		var connection = mysql.createConnection({
			host: infoConnect.host,	port: infoConnect.port, user: infoConnect.user, password: infoConnect.password, database: infoConnect.database
		});

		connection.connect();
		connection.query(sql, (error, value) => {
			if (error)
				reject(error);
			else resolve(value);

			connection.end();
		});
	});
}