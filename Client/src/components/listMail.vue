<style scoped>
	body{
	overflow-x: hidden;
}
#side-menu a p{
	position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #c8d6e5;
    text-align: center;
    line-height: 42px;
    font-size: 20px;
}
#side-menu a b{
	margin-left: 40px;
}
#side-menu a span{
	position: static;
    margin-left: 40px;
}

.help-security {
    border-left: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
}
.help-security  .help-contact{
	position: absolute !important;
	left: 50px !important;
	top: 50% !important;
	transform: translateY(-50%) !important; 
	font-size: 20px;
    padding: 15px; 
    border-radius: 50%; 
    border: 1px solid #74b9ff;
}
.help-security  .help-wrapper{
	padding: 15px 0;
    margin-left: 100px !important;
    font-size: 30px !important;
}
.help-security  p{
	margin: 0;
}
.help-security  .info-employees{
	margin: 0;
	font-size: 15px;
	color: #928f8f;
}
.reply{
    border-left: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
    padding: 50px 0 70px 0;
}

.reply  .help-contact{ 
	display: inline-block;
	margin: 0 0 0 30px;
	font-size: 20px;
    border-radius: 50%; 
    background-color: #74b9ff;
    text-align: center;
    line-height: 50px;
    width: 50px;
    height: 50px;
    position: relative;
}
.reply  .help-contact i{ 
	position: absolute;
    right: 8px;
    bottom: -4px;
    font-size: 10px;
    padding: 4px 5px;
    border-radius: 50%;
    border: 1px solid black;
    background: #ffffff;
}
.reply .reply-form textarea{
	height: 200px;
}
.reply .reply-form .text-form{
	border: 1px solid #d0d0d0;
	border-top: none;
}
.reply .reply-form .text-form .T{
	display: inline-block;
	font-size: 20px;
    padding: 3px 13px;
}
.reply .reply-form .text-form .upload{
	display: inline-block;
	font-size: 20px;
	cursor: pointer;
}
.reply .reply-form .text-form input[type="text"]{
	border: none;
    border-left: 1px solid #f1f1f1;
    margin: 0;
    outline: none;
    box-shadow: none;
}

.message-info{
	border-left: 1px solid #d0d0d0;
	position: relative;
}
.message-info .all-message{
	position: absolute;
    top: 0;
    left: 110px;
    transform: translateY(-100%);
    padding: 10px 0;
}
.message-info .all-message::before{
	position: absolute;
	content: "";
    bottom: 0;
    left: 0;
    background-color: #007bff;
    width: 100%;
    height: 3px;
}
.message-info .all-message .quantity{
	background-color: #007bff;
}
.message-info .customer-message { 
	padding: 20px 0;
	border-bottom: 1px solid #d0d0d0;
}
.message-info .customer-message .help-contact{ 
	display: inline-block;
	margin: 0px 0 0 40px;
	font-size: 20px;
    border-radius: 50%; 
    background-color: #74b9ff;
    text-align: center;
    line-height: 50px;
    width: 50px;
    height: 50px;
    float: left;
    position: relative;
}
.message-info .customer-message .help-contact i{ 
	position: absolute;
    right: 8px;
    bottom: -4px;
    font-size: 10px;
    padding: 4px 5px;
    border-radius: 50%;
    border: 1px solid black;
    background: #ffffff;
}
.message-info .customer-message .name-customer{ 
	width: 90%;
	margin: 5px -23px 0 0;
    padding: 0;
    float: right;
}
.message-info .customer-message .name-customer span{ 
	font-weight: 100;
}
.message-info .customer-message .reply-customer{ 
	width: 90%;
	margin: 0;
    padding: 0;
    float: right;
}
span.msg {
    font-style: italic;
    display: inherit;
    color: #000000c9;
    font-family: none;
}
div#wrapper {
    overflow: auto;
}
ul#side-menu {
    overflow: auto !important;
    max-height: 300px;
    min-height: 695px;
}
@media (min-width: 768px){
    .listmail {
        z-index: 1;
        position: absolute;
        width: 278px !important;
        margin-top: 51px;
    }
}
.T>a {
    line-height: 36px;
    font-size: 17px;
    border: 1px solid;
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
}
.btn-block {
    position: absolute;
    top: 11px;
    right: 49%;
}
</style>
<template>
	<div>
        <!-- menu left -->
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="margin-bottom: 0; background-color: white;">
            <!-- button reponsive -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html"></a>
            </div>
            <!-- top bar -->
            <ul class="nav nav-user navbar-top-links navbar-right">
                <div class="col-sm-4 search">
                    <form action="admin123/item/all" method="GET">
                        <div class="input-group">
                            <input type="text" class="form-control" name="search" placeholder="Search for..." value="">
                            <input type="hidden" value="all">
                            <span class="input-group-btn">
                                <button class="btn btn-info" type="submit">Tìm kiếm</button>
                            </span>
                        </div>
                    </form>
                </div></li>
                <li>{{Email}}</li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- end top bar -->

        

             <!-- LIST MAIL LEFT -->
            <div class="navbar-default navbar-static-side nav-ins listmail" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <h4 class="view">
                                Customer
                                <span class="back"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                            </h4>
                        </li>
                        <li v-for="item in privatemsg">
                            <a @click="message(item.Email)"> 
                                <p class="icon-user">
                                    <i class="fa fa-user"></i>
                                </p>
                                <b>{{item.Email.slice(0,40)+'...'}} </b>
                                <span class="msg">{{item.Content.slice(0,39)+'...'}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
             <!--END LIST MAIL LEFT -->
        </nav>
        <!-- end menu left -->

        <div id="page-wrapper">
            <div class="help-security">
                  <div class="row">
                    <div class="col-lg-12">
                        <span class="fa fa-envelope-o help-contact"></span>
                        <div class="help-wrapper">
                            <p>Hổ trợ Khách hàng</p>
                            <h4 class="info-employees">
                                <span>{{datenow}}</span> 
                                    > 
                                <span>Mail hỗ trợ
                                    <a href="#">(htkh17hcb@gmail.com)
                                    </a>
                                </span> 
                                    >
                               
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- hết help-security -->htkh17hcb@gmail.com

            <div class="reply">
                <div class="row">
                    <div class="col-lg-1">
                        <span class="help-contact">P<i class="fa fa-user"></i></span>
                    </div>
                    <div class="col-lg-11">
                         <div class="reply-form">
                            <form action="" method="post" v-on:submit.prevent="senmail">
                                <div class="form-group" style="margin-left: 15px;">
                                     <div class="row">
                                        <div class="col-lg-1">
                                            <div class="T">
                                                <a href="#" >Subject</a>
                                            </div>
                                                    <div class="upload">
                                               
                                            </div>
                                        </div>
                                        <div class="col-lg-10">
                                            <input type="text" class="form-control" name="" v-model="sendmessage.subject">
                                        </div>
                                       
                                    </div>
                                    <label for="exampleFormControlTextarea1"></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="sendmessage.content" ></textarea>
                                    <div class="text-form">
                                        <div class="row">
                                            <div class="col-lg-1">
                                                <div class="T">
                                                    <a href="#" >T</a>
                                                </div>
                                                        <div class="upload">
                                                   
                                                </div>
                                            </div>
                                            <div class="col-lg-10">
                                                <input type="hidden" class="form-control" name="">
                                            </div>
                                            <div class="col-lg-1">
                                                <span class="btn btn-info btn-block" @click="sendMsg">send</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- hết reply -->
            <div class="message-info">
                <div class="all-message">
                    All message <span class="quantity badge badge-info">{{messageContent.length}}</span>
                </div>
                <div class="customer-message" v-for="item in messageContent">
                    <div class="row">
                        <span class="help-contact"><img v-bind:src="item.AttachFile" style="width:47px;height:47px;border-radius:32px"> <i class="fa fa-user"></i></span>
                        <b class="name-customer">
                           {{item.Email}} <span>( {{item.SendTime}}) </span>
                        </b>
                        <p class="reply-customer">{{item.Content}}</p>
                    </div>
                </div>
                <!-- hết 1 customer-message -->
            </div>
            <!-- hết message-info -->
        </div>    
    </div>

</template>

<script >
    export default{
        data(){
             var name = localStorage.getItem('key');
            return {
                  privatemsg:[],
                  Email: name,
                  //getMailUser:'',
                  sendmessage:{},
                  messageContent:[],// luu tin nhan
                  countMessage:'',
                  datenow:this.formatAMPM(new Date()),
                  avatarImg:''
            }
        },
        
        ready:function(){
            this.created();
            //this.datenow = 
        },  
        created(){
            this.axios.get('http://172.28.77.1:1742/mail')   
            .then(response =>{
                this.privatemsg = response.data; 
            })
            .catch(function(error){
                console.log(error);
            })
        },
        
        // lay danh sach message cua tung mail
        methods:{
            message: function(Email){
               // alert(Email);

               this.sendmessage.emailReceive = Email;

                this.axios.post('http://172.28.77.1:1742/mail/getContent', {
                      email: Email,
                    })
                    .then( (response) => {   
                    this.sendmessage.subject = response.data[0].Subject;
                      if(response.data[0].TypeID==0){
                            this.avatarImg = 'https://www.upsieutoc.com/images/2018/11/23/user.png';
                            //response.data.AttachFile='https://www.upsieutoc.com/images/2018/11/23/user.png';
                            for (var i = 0; i < response.data.length; i++) {
                                response.data[i].AttachFile = 'https://www.upsieutoc.com/images/2018/11/23/user.png';
                            }
                            this.messageContent = response.data; 
                            console.log(response.data); // show if success
                      }
                    
                    })
                    .catch(function (error) {
                      console.log(error); // run if we have error
                    });
            },
             formatAMPM:function(date) {
                var days=new Array("Chủ nhật","Thứ hai","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7");
                var months=new Array("1","2","3","4","5","6","7","8","9","10","11","12");
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var day=date.getDay();
                var d=date.getDate();
                var month=date.getMonth();
                var year=date.getFullYear();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime =days[day] + " Ngày " + d + "/" +months[month] + "/" + year +'  -- '+ hours + ':' + minutes + ' ' + ampm;
                return strTime;
            },       
            //setTimeout("refrClock()",1000); }           
            sendMsg(){
                //if(this.Email=='hotdau911995@yahoo.com'){
                var msg = {'AttachFile':'https://www.upsieutoc.com/images/2018/11/23/tv.png','Email':'htkh17hcb@gmail.com','SendTime':this.formatAMPM(new Date()),'Content':this.sendmessage.content};

                    //alert(this.sendmessage.content);
                    this.axios.post('http://172.28.77.1:1742/mail', this.sendmessage)
                    .then( (response) => {              
                            console.log(response);
                            this.messageContent.push(msg);
                    })
                    .catch(function (error) {
                      console.log(error); // run if we have error
                    });
               // }
            

                // if(this.msgFrom){
                //     alert('ok');
                // }
                
             // if(this.msgFrom){
             //   axios.post('http://localhost/larabook/index.php/sendMessage', {
             //          conID: this.conID,
             //          msg: this.msgFrom
             //        })
             //        .then( (response) => {              
             //          console.log(response.data); // show if success
             //          if(response.status===200){
             //            app.singleMsgs = response.data;
             //          }

             //        })
             //        .catch(function (error) {
             //          console.log(error); // run if we have error
             //        });

             // }
           },
        }
    }

//v-model="msgFrom" @keydow="inputHandler"
// inputHandler(e){
//      if(e.keyCode ===13 && !e.shiftKey){
//        e.preventDefault();
//        this.sendMsg();
//      }
//    },
//    sendMsg(){
//      if(this.msgFrom){
//        axios.post('http://localhost/larabook/index.php/sendMessage', {
//               conID: this.conID,
//               msg: this.msgFrom
//             })
//             .then( (response) => {              
//               console.log(response.data); // show if success
//               if(response.status===200){
//                 app.singleMsgs = response.data;
//               }

//             })
//             .catch(function (error) {
//               console.log(error); // run if we have error
//             });

//      }
//    },

//    friendID: function(id){
//      app.friend_id = id;
//    },
//    sendNewMsg(){
//      axios.post('http://localhost/larabook/index.php/sendNewMessage', {
//             friend_id: this.friend_id,
//             msg: this.newMsgFrom,
//           })
//           .then(function (response) {
//             console.log(response.data); // show if success
//             if(response.status===200){
//               window.location.replace('http://localhost/larabook/index.php/messages');
//               app.msg = 'your message has been sent successfully';
//             }

//           })
//           .catch(function (error) {
//             console.log(error); // run if we have error
//           });
//    }
</script>
