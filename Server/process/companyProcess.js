var connect = require('../api_other/db');

exports.getListCompany = function(req,res) {
	connect.load('select * from CompanyInfo')
	.then(companis =>{
		//console.log(companis);
		res.status(200).send(JSON.stringify(companis));
	})
	.catch((error) => {
		console.log(error);
		res.status(400).send(error);
	});
}

exports.getCompany = function(req,res) {
	connect.load(`select  * from CompanyInfo where Id = '${req.params.id}'`)
	.then(company =>{
		//console.log(company);
		if(company.length > 0){
			res.status(204).send(JSON.stringify(company));
		} else {
			res.status(200).send({ message: 'Dữ liệu không có'});
		}
	})
	.catch((error) =>{
		console.log(error);
		res.status(400).send(error);
	})
}

exports.add = function(req,res) {
	connect.write(`INSERT INTO CompanyInfo(Id, CompanyName, ComID) VALUES (${req.body.id},${req.body.name},${req.body.comid})`)
	.then(() => {
		res.status(200).send({message: 'Thêm công ty thành công.'});
	})
	.catch((error) => res.status(400).send(error));
}

exports.delete = function(req,res) {
	connect.write(`DELETE FROM CompanyInfo WHERE Id = ${req.params.id}`)
	.then(() => {
		res.status(200).send({message: 'Thêm công ty thành công.'});
	})
	.catch((error) => res.status(400).send(error));
}