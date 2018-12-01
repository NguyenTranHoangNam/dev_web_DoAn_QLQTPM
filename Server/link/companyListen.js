var company = require('../process/companyProcess'),
	express = require('express');

var router = express.Router();

// API relate company
router.route('/')
.get(company.getListCompany)
.post(company.add); // id:... name:... comid:...

router.route('/:id')
.get(company.getCompany)
.delete(company.delete);

module.exports = router;