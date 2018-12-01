var connect = require('../api_other/db'),
mail = require('../api_other/mail'),
formidable = require('formidable'),
fs = require('fs');

// arg: mailUser = email người gửi, emailReceive = danh sách email người nhận (array), subject = tiêu đề thư gửi, content = nội dung thư cần gửi
exports.sendMail = function(req,res) {
	connect.load("select Email, PasswordMail, HostSmtpMail, PortSmtpMail from AccountCompany where Username like 'supportcentermanagement'")
	.then(row => {
		if(row.length == 1){
			var info = {
				email_send: row[0].Email,
				password_email_sent: row[0].PasswordMail,
				host: row[0].HostSmtpMail,
				port: row[0].PortSmtpMail,
				email_receive: req.body.emailReceive,
				subject: req.body.subject,
				content_mail: req.body.content,
				reply_message_id: req.body.mailId
			};
			mail.sendMail(info,res);
		}
	})
	.catch(err => {
		console.log(err);
      res.status(400).send({message: 'Có lỗi xảy ra khi lấy thông tin email gửi đi!'});		
	});
}
//SELECT DISTINCT TOP 1 ID, Email, ProductName, ProductModel
// FROM Products
// ORDER BY ID DESC
exports.getemailReceive=function(req,res) {
	connect.write("SELECT * FROM Mail WHERE ID IN(SELECT Max(ID) FROM Mail GROUP BY Email)")
	.then(value=>
	{
		res.json(value);
		console.log("insert susccess!!");
	})
	.catch(err=>{
		res.status(400).send(err);
		console.log("insert error!!"+err);
	});
}
exports.emailReceive = function(req,res) {
	mail.receiveMail(req,res);
}
exports.getemailContent=function(req,res) {
	connect.load("SELECT * FROM Mail WHERE Email = '"+req.body.email+"'")
	.then(mail =>{

		res.json(mail);
	})
	.catch((error) => res.status(400).send(error));

}