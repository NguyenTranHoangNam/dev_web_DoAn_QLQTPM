
var me = {};
me.avatar = "images/tv.png";

var you = {};
you.avatar = "images/user.png";

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
// chuyển xuống dưới 
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

$('.showshere').click(function(){
    $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
})

//-- Clear Chat
resetChat();

//-- Print Messages
/*
insertChat("me", "Hello admin...", 0);  
insertChat("you", "Hi, chào ban", 1500);
insertChat("me", "tối muốn hỗ trợ?", 3500);
insertChat("you", "bạn muốn gì",7000);
insertChat("me", "Spaceman: why! why! why?!", 9500);
insertChat("you", "next", 12000);
*/
// socket

var is_request = false, accept_request = false;

var socket = io('http://localhost:2018', {transports: ['websocket', 'polling', 'flashsocket']});

socket.on('connect', () => {
    console.log(socket.id);
    //alert(socket.id.substr(0,7));
});

socket.on('accept_request', () =>{
    accept_request = true;
    insertChat("me", "Tôi đang hỗ trợ bạn nè");
});

socket.on('message', arg => {
    console.log(arg);
    if(socket.id != arg.user)
        insertChat('me', arg.message, 0);
    else
        insertChat('you', arg.message, 0);     
});

$(document).ready(function() {
    $(".mytext").css("visibility", "collapse");
    $('div.w3agile_newsletter_right.chatio #send').click(() => {
        alert('chào '+$('div.w3agile_newsletter_right.chatio:nth-child(3) input:nth-child(1)').val() + ' chat với chúng tôi để hỗ trợ');
        socket.emit('change_email', $('div.w3agile_newsletter_right.chatio:nth-child(3) input:nth-child(1)').val());
         $(".chatio").css("visibility", "collapse");
         $(".mytext").css("visibility", "visible");
         $(".box-message").css("height", "73%");
    });
   
    $('.showshere').click(() => {
        if(accept_request) {
            socket.emit('message', $('.text.text-r input.mytext').val());
        } else {
            socket.emit('request', $('.text.text-r input.mytext').val());
        }
    });


    $(".mytext").on("keydown", function(e){
        if (e.which == 13){
            console.log($(this).val());
            if(accept_request) {
                socket.emit('message', $('.text.text-r input.mytext').val());
            } else {
                socket.emit('request', $('.text.text-r input.mytext').val());
            }
            var text = $(this).val();
            if (text !== ""){
                //insertChat("me", text);              
                $(this).val('');
            }
        }
    });

});

//-- NOTE: No use time on insertChat.