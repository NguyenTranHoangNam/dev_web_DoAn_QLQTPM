var connect = require('../api_other/db');
var md5 = require('blueimp-md5');
var session = require('express-session');

// exports.login = function(req, res){
// 	if(req.session.Email){
// 		res.status(100).send({message: 'Đã đăng nhập'});
// 	}else{
// 		console.log(req.body);
// 		var un = req.body.u;
// 		var pw = req.body.p;
// 		connect.load('select ComID, Email, Password, Username, PhoneNumber from AccountCompany where '+
// 			'Email like \''+un+'\' and Password like \'md5('+pw+')\'')
// 		.then(users => {
// 			//console.log(JSON.stringify(users));
// 			if(users.lenth == 0){
// 				res.status(400).send({ message: 'Đăng nhập thất bại\nNhập sai email hoặc mật khẩu' });
// 			} else if(users.lenth == 0 && users[0].Email == un && users[0].Password == md5(pw)){
// 				req.session.Email = users[0].Email; 
// 				users[0].Password = undefined;
// 				res.status(200).send(JSON.stringify(users[0]));
// 			}else {
// 				res.status(400).send({ message: 'Đăng nhập thất bại' });
// 			}
// 		})
// 		.catch((error) => res.status(400).send(error));
// 	}
// }


exports.login = function(req, res){
	/*if(req.session.Email){
		res.status(400).send({message: 'Đã đăng nhập'});
	}else{*/
		var un = req.body.u;
		var pw = req.body.p;
		console.log(`select Email, Password, Username, PhoneNumber from AccountCompany 
			where md5(Email) like md5('${un}') and Password like md5('${pw}')`);
		connect.load(`select Email, Password, Username, PhoneNumber from AccountCompany 
			where md5(Email) like md5('${un}') and Password like md5('${pw}')`)
		.then(users => { 
			//console.log(JSON.stringify(users));
			console.log(JSON.stringify(users));
			if(users.length === 0){
				 res.json({success:1});
				 //res.status(400).send({ message: 'Đăng nhập thất bại\nNhập sai email hoặc mật khẩu' });
			}else if(users[0].Email == un && users[0].Password == md5(pw)){
				//req.session.Email = users[0].Email; 
				users[0].Password = undefined;
				res.status(200).send(users[0]);
			}else {
				res.json({success:2});
				//res.status(400).send({ message: 'Đăng nhập thất bại' });
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(400).send({success:3});
		});
	}

exports.update = function(req, res) {
	if(!req.body.u) res.status(400).send('Không nhận được khóa đầu vào.');
	if(req.body.c) {
		connect.write(`UPDATE AccountCompany SET ComID='${req.body.c}' WHERE Email='${req.body.u}';`)
		.catch(err => console.log(err));
	}
	if(req.body.p) {
		connectconnect.write(`UPDATE AccountCompany SET Password='${req.body.p}' WHERE Email='${req.body.u}';`)
		.catch(err => console.log(err));
	}
	if(req.body.n) {
		connect.write(`UPDATE AccountCompany SET Username='${req.body.n}' WHERE Email='${req.body.u}';`)
		.catch(err => console.log(err));
	}
	if(req.body.pn) {
		connect.write(`UPDATE AccountCompany SET PhoneNumber='${req.body.pn}' WHERE Email='${req.body.u}';`)
		.catch(err => console.log(err));
	}
	if(req.body.pm) {
		connect.write(`UPDATE AccountCompany SET PasswordMail='${req.body.pm}' WHERE Email='${req.body.u}';`)
		.catch(err => console.log(err));
	}
	if(req.body.hm) {
		connect.write(`UPDATE AccountCompany SET HostSmtpMail='${req.body.hm}' WHERE Email='${req.body.u}';`)
		.catch(err => console.log(err));
	}
	if(req.body.pom) {
		connect.write(`UPDATE AccountCompany SET PostSmtpMail='${req.body.pom}' WHERE Email='${req.body.u}';`)
		.catch(err => console.log(err));
	}
	res.status(200).send({message: 'Sửa thành công'});
}
exports.register = function(req, res) {
	connect.load(`SELECT * FROM AccountCompany WHERE Email='${req.body.email}';`)
	.then(rows => {
		if(rows.length == 1)
			res.status(400).send({message: 'Email đã có người đăng ký email này rồi!'});
	})
	.catch(err => console.log(err));

	/*if(req.session.Email){
		res.status(100).send({message: 'Đã đăng nhập'});
	}*/

	let email = req.body.email;
	let pw = req.body.pw;
	let f_name = req.body.uname;
	let phone = req.body.phone;
	connect.load('insert into AccountCompany(Username, Email, Password, PhoneNumber) values(\''+f_name+'\', \''+email+'\',md5(\''+pw+'\'),\''+phone+'\');')
	.then(() => {
		res.status(200).send({message: 'Tạo tài khoản thành công.'});
	})
	.catch((error) => res.status(400).send(error));
}

exports.getInfoHostMail = function(req, res) {
	connect.load(`SELECT PasswordMail 'pass', HostSmtpMail 'host', PostSmtpMail 'port' FROM AccountCompany WHERE WHERE Email='${req.body.u}';`)
	.then(row => {
		res.status(200).send(row);
	})
	.catch(err => {
		console.log(err);
		res.status(400).send({message: 'Có lỗi xảy ra'});	
	});
}

exports.testConnectDB = function(req, res) {
	connect.load('SELECT sqrt(72) test')
	.then(query =>{
		res.status(200).send(JSON.stringify(query));
	})
	.catch((error) => res.status(400).send(error));
}


exports.showAll = function(req, res) {
	connect.load('SELECT * from AccountCompany')
	.then(user =>{
		res.status(200).send(JSON.stringify(user));
	})
	.catch((error) => res.status(400).send(error));
}

exports.logout = function(req,res) {
	req.session.destroy(function(err) {
		if(err){
			res.negotiate(err);			
		}else{
			res.redirect('/');
		}
	});
}

exports.checkLoggedIn = function(req,res){
	if(req.session.Email){
		res.status(200).sent({loggedin: 'true'});
	}else{
		res.status(400).sent({loggedin: 'false'});
	}
}


exports.convertEmailToId = function(email) {
	connect.load(`SELECT tk.MaTK FROM AccountCompany tk WHERE tk.Email like '${partner}'`)
	.then(row =>{
		if(row.length ==1){
			return row[0].MaTK;
		}
		return '-1';
	})
	.catch(error => {
		return '-1';
	})
}