
var me = {};
me.avatar = "https://www.upsieutoc.com/images/2018/11/23/tv.png";

var you = {};
you.avatar = "https://www.upsieutoc.com/images/2018/11/23/user.png";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());
    if (who == "me"){
        control = '<li style="width:100%">' +
        '<div class="msj macro">' +
        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
        '<div class="text text-l">' +
        '<p>'+ text +'</p>' +
        '<p><small>'+date+'</small></p>' +
        '</div>' +
        '</div>' +
        '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
        '<div class="msj-rta macro">' +
        '<div class="text text-r">' +
        '<p>'+text+'</p>' +
        '<p><small>'+date+'</small></p>' +
        '</div>' +
        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
        '</li>';
    }
    setTimeout(
        function(){                        
            $(".box-message").append(control).scrollTop($(".box-message").prop('scrollHeight'));
        }, time);
    
}

function resetChat(){
    $(".box-message").empty();
}
/*
di chuyen xuong duoi
$(".mytext").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
});
*/


//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("you", "chào. tao cần hỗ trợ...", 0);  
insertChat("me", "Hi, dạ ", 1500);
insertChat("me", "Bạn muốn gì", 3500);
insertChat("you", "..............",7000);

var socket = io('http://localhost:2018', {transports: ['websocket', 'polling', 'flashsocket']});
// socket.close();

// LOAD LIST MESSAGE
socket.on('list_request_current', (arg) => {
    //console.log(`da nhan tat ca request ${arg.length}`);
    //console.log(arg);
    var i1 = 0;
    var new1 = 0;
    var proc = 0;
    $('table.table.table-striped tbody').html("");
    arg.forEach(i => {
        if(i.m_statu == 'new'){
            new1++;
        }
        if(i.m_statu == 'process'){
            proc++;
        }
         $('table.table.table-striped tbody').prepend(`<tr><td><input type="checkbox" name="cid" value="${i.id}"></td>
            <td class="mesage">${i.m_message}</td>
            <td class="name">${i.m_name}</td>
            <td><a href="admin123/item/change-status/${i.id}/active"><span class="label label-success">${i.m_statu}</span></a></td>
            <td>${i.m_time}</td>
            <td class="mail">${i.m_mail}</td>
            <td><a type="button" v-on:click="Ischeck=true" class="btn btn-info btn-sm ">Hỗ trợ</a></td></tr>`
        );
         i1++;
    });
    console.log(i1);
    $('.allist').html(i1);
    $('.new').html(new1);
    $('.proc').html(proc);
    $('.ngayhientai').html(formatAMPM(new Date())  + '    >>    '); 
    
});

socket.on('message', arg => {
    console.log(arg);
    if(socket.id == arg.user)
        insertChat('me', arg.message, 0);
    else
        insertChat('you', arg.message, 0);     
});

$(document).ready(function() {
    $('.showshere').click(function(){
        $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
    })
    $(document).on('click', '.btn.btn-info.btn-sm', function() {

        socket.emit('receive_request', {id: $(this).parent().parent().find('input').val(), name: $('.tenname').text().trim()});

        $('h3.panel-title i').text($(this).parent().parent().find('.mail').text().trim());
        insertChat('you',$(this).parent().parent().find('.mesage').html().trim());

        resetChat();
        $('div.col-sm-3.frame.boxchat').show();
    });

    $(document).on('click', 'span.glyphicon.glyphicon-remove.icon_close', function() {
        socket.emit('change_status', "close");
    });

    $(".mytext").on("keydown", function(e){
        if (e.which == 13){
            socket.emit('message_of_user', $(this).val());
            var text = $(this).val();
            if (text !== "") {
                //insertChat("me", text);              
                $(this).val('');
            }
        }
    });
});
setInterval(() => {
    socket.emit('get_all_ticket');
}, 2500);
//-- NOTE: No use time on insertChat.
