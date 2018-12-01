var express = require('express'),
session = require('express-session'),
bodyparser = require('body-parser'),
morgan = require('morgan'),
cors = require('cors');
var app = express();
var mail = require('./process/mailProcess');

var num_port = 1742;
var port = process.env.port || num_port;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//app.use(express.bodyParser());
app.use(session({secret: 'QLPM'}));


app.use('/user', require('./link/userListen'));
app.use('/company', require('./link/companyListen'));
app.use('/mail', require('./link/mailListen'));
app.use('/ticket', require('./link/ticketListen'));

require('./link/chatListen');
mail.emailReceive();
app.listen(port, () =>{
	console.log("Link server: "+require("ip").address()+":" + port);
	console.log("Running server!!!");
})
/*
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
	if (req.url == '/fileupload') {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var oldpath = files.filetoupload.path;
			var newpath = './files/' + files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err){ 
					console.log(err);
					res.end();
				}
				else{
					res.write('File uploaded and moved!');
					res.end();
				}
			});
		});
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		return res.end();
	}
}).listen(8080);
*/