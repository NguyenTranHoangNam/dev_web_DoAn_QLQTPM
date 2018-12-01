var db = require('../process/chatProcess');
const websocket = require('socket.io');
const http = require('http');
const express = require('express');
const app = express();

const server = http.Server(app);
wss = require("socket.io")(server);
//app.on('upgrade', wss.handleUpgrade);

Number.prototype.padLeft = function(base,chr){
	var  len = (String(base || 10).length - String(this).length)+1;
	return len > 0? new Array(len).join(chr || '0')+this : this;
}

var listRequest = [];
wss.on('connection', function(socket) {
	console.log(`${socket.id} - ${socket.m_mail} ket noi toi`);


	socket.on('disconnection', () => {
		for (var i = 0; i < listRequest.length; i++) {
			if(listRequest[i].id == socket.id)
				listRequest[i].m_statu = 'exitted';
		}
	});

	// user
	function sendAllRequestCurrent() {
		var list = [];
		for (var i = 0; i < listRequest.length; i++) {
			if(listRequest[i].m_message != ""){
				var temp = {
					id: listRequest[i].id,
					m_mail: listRequest[i].m_mail,
					m_time: listRequest[i].m_time,
					m_statu: listRequest[i].m_statu,
					m_message: listRequest[i].m_message,
				};
				list.push(temp);
			}
		}
		console.log(`da gui ${list.length} yeu cau`);
		wss.sockets.emit('list_request_current', list);
	}

	socket.on('get_all_ticket', () => {
		sendAllRequestCurrent();
	});

	socket.on('user_cnt', info => {
		socket.m_name = info.name;
	});

	socket.on('change_status', info => {
		for (var i = 0; i < listRequest.length; i++) {
			if(listRequest[i].id == socket.m_room && listRequest[i].statu != 'exitted') {
				listRequest[i].m_statu =  info;
			}
		}
	});

	socket.on('receive_request', info => {
		socket.leave(socket.m_room);
		socket.m_room = info.id;
		socket.join(info.id);
		socket.m_name = info.name;

		for (var i = 0; i < listRequest.length; i++) {
			if(listRequest[i].id  == info.id){
				listRequest[i].m_statu = 'process'
				listRequest[i].emit('accept_request'); //////////////////////////////// customer
				console.log(socket.m_name +'da nhan yeu cau cua ' + listRequest[i].m_mail);
				break;
			}
		}
	});

	socket.on('message_of_user', info => { //okay
		wss.sockets.in(socket.m_room).emit('message', {user: socket.id, message: info});
	});

	//customer
	socket.on('change_email', val => {
		socket.m_mail = val;
		console.log(`${socket.id} doi ten dinh danh ${socket.m_mail}`);
	});

	socket.on('request', info => {
		if (socket.m_message)
			socket.m_message += '<br/>'+info;
		else {
			var d = new Date;
			socket.m_message = info;
			socket.m_statu = 'new';
			socket.m_time = [ d.getDate().padLeft(),
			(d.getMonth()+1).padLeft(),
			d.getFullYear()].join('/')+
			' ' +
			[ d.getHours().padLeft(),
			d.getMinutes().padLeft(),
			d.getSeconds().padLeft()].join(':');
			listRequest.push(socket);
		}

		wss.sockets.in(socket.id).emit('message', {user: socket.id, message: info});
		console.log(`khach yeu cau: ${socket.id} - ${socket.m_mail} - yeu cau moi ${info} - yeu cau hien tai ${socket.m_message}`);
	});

	socket.on('message', info => {
		console.log(`khach noi ${socket.id} - ${socket.m_mail} - ${info.m_message}`);
		wss.sockets.in(socket.id).emit('message', {user: socket.id, message: info});
	})
});

server.listen(2018, () => {
	console.log('server SOCKET started with PORT 2018');
});