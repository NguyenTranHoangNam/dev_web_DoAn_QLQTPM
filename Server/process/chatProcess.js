var db = require('../api_other/db');
var check = require('validator');

var sql="";

exports.isEmail = function(email) {
	return check.isEmail(email);
}

exports.getListRoomOfUser = function(user) {
	sql=`SELECT r.id 'room_id', r.name 'room_name', m.account, m.message, MAX(m.time_send) 'time_sent_last', if(MAX(m.time_send)<u.time_seen, 'true', 'false') 'seen_all' 
FROM chat_room r, chat_user u LEFT JOIN chat_message m ON u.room_id = m.room_id
WHERE r.id = u.room_id AND u.account like '${user}'
GROUP BY r.name
ORDER BY m.time_send DESC`;
	console.log(sql);
	return db.load(sql);
}

exports.getAllMessageInRoom = function(room_name) {
	sql=`SELECT u.account, m.message, m.time_send
FROM chat_room r, chat_user u, chat_message m
WHERE r.id = u.room_id AND u.room_id = m.room_id AND u.account = m.account
AND r.id like '${room_name}'
ORDER BY m.time_send DESC`;
	console.log(sql);
	return db.load(sql);
}

exports.saveMessage = function(room_id, user, content_message) {
	sql=`INSERT INTO chat_message(room_id, account, message) VALUES ('${room_id}', '${user}', '${content_message}');`;
	console.log(sql);
	return db.write(sql);
}

exports.createRoom = function(room_name) {
	sql=`INSERT INTO chat_room(name) VALUES ('${room_name}')`;
	console.log(sql);
	return db.write(sql);
}

exports.changeRoomName = function(room_id, room_name_new) {
	sql=`UPDATE chat_room SET name = '${room_name_new}' WHERE id = '${room_id}';`;
	console.log(sql);
	return db.write(sql);
}

exports.getListUserInRoomNotExistUserCurrent = function(room_id, user_current) {
	sql=`SELECT account 
FROM chat_user 
WHERE room_id = '${room_id}'
AND account != '${user_current}';`;
	console.log(sql);
	return db.load(sql);
}

exports.getNameRoomWhenRoomNullName = function(room_id, email_current) {
	var str ="";
	this.getListUserInRoomNotExistUserCurrent(room_id, email_current)
	.then(rows => {
		var len = rows.length;
		for (var i = 0; i < len; i++) {
			str = str + rows[i].account;

			if(i < len -1) str = str + ", ";
		}
		console.log(`get room with room_id ${room_id} an name ${str} as user ${email_current} `);
		return str;
	})
	.catch(error => {
		console.log(error);
	});
}

exports.updateDateSeenRoomOfUser = function(id_room, user_current) {
	sql=`UPDATE chat_user 
SET time_seen = CURRENT_TIMESTAMP 
WHERE room_id = '${id_room}' 
AND account = '${user_current}'`;
	console.log(sql);
	return db.write(sql);
}

exports.addUserToRoom = function(room_id, user) {
	sql=`INSERT INTO chat_user(room_id, account, time_seen) VALUES ('${room_id}','${user}', CURRENT_TIMESTAMP);`;
	console.log(sql);
	return db.write(sql);
}

exports.checkUserInRoom = function(room_id, user) {
	sql=`SELECT * FROM chat_user 
WHERE room_id = '${room_id}' 
AND account = '${user}';`;
	console.log(sql);
	return db.load(sql);
}

exports.getRoomWithPartner = function(user_current, partner) {
	sql=`SELECT chat_user.room_id, COUNT(chat_user.account) 
FROM chat_user 
WHERE chat_user.room_id IN (SELECT c1.room_id 
		FROM chat_user c1 
		WHERE c1.account = '${user_current}') 
	AND chat_user.room_id IN (SELECT c1.room_id 
		FROM chat_user c1 
		WHERE c1.account = '${partner}') 
GROUP BY chat_user.room_id
HAVING COUNT(chat_user.account) = 2;`;
	console.log(sql);
	return db.load(sql);
}

exports.addUser = function(email_name) {
	sql=`INSERT INTO tk(Email) VALUES ('${email_name}');`;
	console.log(sql);
	return db.write(sql);
}
// hàm tạm trong thời gian ngằn
/*exports.addUser = function(email_name) {
	return db.write(`INSERT INTO tk(Email) VALUES ('${email_name}');`);
}
exports.convertEmailToId = function(email) {
	// body...
}*/

