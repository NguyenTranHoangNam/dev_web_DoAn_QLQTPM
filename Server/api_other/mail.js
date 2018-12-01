var nodemailer = require('nodemailer');
var Imap = require(`imap`);
var db=require('./db');
var MailParser = require("mailparser").MailParser;
const simpleParser = require('mailparser').simpleParser;

/*
api to send mail
input: info = {
  // ex: gmail
  host: "smtp.gmail.com",
  port: 587,
  email_send: "user_name@do.main"
  password_email_sent: "password_email_of_email_send",
  email_receive: "user_name@do.main",
  subject: "title_of_email",
  content_mail: "content_of_email"
  attachments: path of file
}
*/
exports.sendMail = function(infomation,res,mode = 0) {
	var transporter = nodemailer.createTransport({
		// host: infomation.host,
		// port: infomation.port,
    service:'Gmail',
    tls:{
        rejectUnauthorized:false
    },
		ssl : true,

		auth: {
			user: infomation.email_send,
			pass: infomation.password_email_sent
		}
	});

	var mailOptions = {
		from: infomation.email_send,
		to: infomation.email_receive,
		subject: infomation.subject,
		html: infomation.content_mail,
		inReplyTo: infomation.reply_message_id
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
			res.status(400).send({message: 'Có lỗi xảy ra khi gửi mail!'});
		} else {
			console.log('Email sent: ' + info);
			if(mode == 0)
				res.status(200).send({message: 'Đã gửi thành công!'});
			else if(mode == 1)
				return info.messageId;
		}
	});
}

function formatDate(date) {
	var year = date.getFullYear(),
  month = date.getMonth() + 1, // months are zero indexed
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds();
  return year + "-" +month + "-" + day + " " +  hour + ":" + minute + ":" + second;
}

exports.receiveMail = function(req,res) {
	db.load("select Email, PasswordMail, PortImap, HostImap from AccountCompany where Username like 'supportcentermanagement'")
	.then(row => {
		var imap = new Imap({
			user: row[0].Email || 'htkh17hcb@gmail.com',
			password: row[0].PasswordMail || '0908325568',
			host: row[0].HostImap || 'imap.gmail.com',
			port: row[0].PortImap || 993,
			tls: true,
			keepalive: {
				interval: 3000,
				idleInterval: 3000,
				forceNoop: true
			},
			tlsOptions: { rejectUnauthorized: false },
			connTimeout: 10000,  
			authTimeout: 5000,   
      mailbox: "INBOX", // mailbox to monitor 
      searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved 
      markSeen: true, 
      fetchUnreadOnStart: true, 
  });

    // function mo? hop thu de doc mail
    function openInbox(cb) {
    	imap.openBox('INBOX', false, cb);
    };

    // function dung de duyet cac mail trong hop thu

    function fetchMessages2(imap){
    	imap.search(['UNSEEN'], function(err, results){
    		if(err)console.log('you are already up to date');
    		else {
    			var f = imap.fetch(results,{ bodies:'',struct: true,markSeen: true});
    			f.on('message', function(msg, seqno){

    				var prefix = '(#' + seqno + ') ';
    				var parser = new MailParser();
            //"INSERT INTO Mail (`Subject`, `Content`, `Assigner`, `SendTime`) VALUES ('" + mail.subject + "', '" + mail.text.toString() + "', '" + mail.from.value[0].address.toString() + "', '" + mail.date.toString() + "');";
            msg.on('body', function(stream, info){
            	simpleParser(stream, (err, mail) => {
            		if(mail!=null)
            		{
            			var cut=mail.text.toString().indexOf("Vào");
            			var content=mail.text.toString().replace(/[\r\n]/g, ' ');
            			if(cut>0)
            			{
            				content=mail.text.toString().slice(0,cut).replace(/[\r\n]/g, ' ');
            			}

            			db.load(`SELECT id FROM Ticket WHERE mail_id like '${(Array.isArray(mail.references) ? mail.references[0] : mail.references)}'`)
            			.then(row => {
            				if(row.length == 1){
            					db.write(`INSERT INTO TicketResponse (ticket_id, user_response, mail_id, content, datetime) VALUES ('${row[0].id}', '${mail.from.value[0].address.toString()}', '${mail.messageId}', '${content}', '${formatDate(mail.date)}')`);
            					db.write(`UPDATE Ticket SET status = '2' WHERE id = '${row[0].id}'`);
            					return true;
            				}
            				else return false;
            			})
            			.then(value =>{
            				if(!value)
            					return db.write( "INSERT INTO Mail (`Subject`, `Content`, `Email`, `SendTime`,`InReplyTo`,`TypeID`) VALUES ('" + mail.subject + "', '" + content + "', '" + mail.from.value[0].address.toString() + "', '" + formatDate(mail.date) + "','" + (Array.isArray(mail.references) ? mail.references[0] : mail.references) + "',"+0+")");
            				else
            					return false;
						})
            			.then(value => {
            				console.log("insert susccess!!");
            			})
            			.catch(err=>{
            				console.log("insert error!!"+err);
            			});

            			console.log(prefix +" tieu de: "+ mail.subject);
            			console.log(prefix +" email from: "+ mail.from.value[0].address);
            			console.log(prefix +" thoi gian: "+ mail.date);

            			console.log(prefix +" noi dung: "+content); 
            			console.log(prefix +"inReplyTo: "+ mail.inReplyTo);
            			console.log(prefix +"messageId: "+ mail.messageId);
            			console.log(mail.references);
            			console.log(mail.replyTo);

            		}

            	});
            });
        })

    			f.once('end', function() {
    				console.log('Done fetching all messages!');
    			});

    			f.once('error', function(err) {
    				console.log('Fetch error: ' + err);
    			});
    		}
    	});
    }
    imap.once('ready', function() {
    	openInbox(function(err, box) {
    		if (err) throw err;
    		imap.on('mail', function(numNewMsgs){
    			console.log(numNewMsgs + " messages has arrived");
                try{
                    fetchMessages2(imap);
                }catch(err){
                    console.log('error: ' + err);
                }
    			
    		});

    	});
    })

    imap.once('error', function(err) {
    	console.log(err);
    });

    imap.connect();
})
	.catch(err => {
		console.log(err); 
	});
}
