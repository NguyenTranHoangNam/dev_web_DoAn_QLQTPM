var mail = require('../process/mailProcess'),
	express = require('express'),
	company = require('../process/companyProcess');

var router = express.Router();

// API relate company
router.route('/')
.get(mail.getemailReceive)
.post(mail.sendMail); // emailReceive, subject, content, mailUser

router.route('/getContent')
.post(mail.getemailContent); // emailReceive, subject, content, mailUser

router.route('/:id')
.get(company.getCompany)
.delete(company.delete);

module.exports = router;