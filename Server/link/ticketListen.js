var ticket = require('../process/ticketProcess'),
	express = require('express');

var router = express.Router();

router.route('/')
.get(ticket.getListTicket);

router.route('/create')
.post(ticket.create); // emailRequest, subject, content

router.route('/getTicket/:id')
.get(ticket.getOneTicket);

router.route('/getResponse/:idTicket')
.get(ticket.getListResponse);

router.route('/response')
.post(ticket.response); // ticketID, emailRepuest, contentResponse, ticketSubject, userResponse

router.route('/changeStatu')
.post(ticket.changeStatu); // statusName, ticketID

module.exports = router;