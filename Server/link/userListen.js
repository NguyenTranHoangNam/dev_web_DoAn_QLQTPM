var user = require('../process/userProcess'),
	express = require('express');

var router = express.Router();

router.route('/')
.get(user.showAll)
.post(user.update); // u (email - require - not null), c (companyID), p (password new - null), n (user name new - null), pm (pasword mail - null), hm (host mail - null), pom (port mail - null)

// API relate user
router.route('/login') 
.post(user.login); // accept: u (username), p (password), 

router.route('/register') 
.post(user.register); // accept: uname (username), email, password, phone, comid

router.route('/infoMail')
.post(user.getInfoHostMail); // accept: email => return: pm (pasword mail), hm (host mail), pom (port mail)

router.route('/logout')
.get(user.logout);

router.route('/logged')
.get(user.checkLoggedIn);

module.exports = router;