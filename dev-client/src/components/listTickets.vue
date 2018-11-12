
<style scoped>
    .col-sm-4.search {
        position: relative;
        right: 59px;
    }
    #form-io{
        width: max-content;
    }
    .showshere {
        background: #dcd6d6;
        /* padding: 10px; */
        font-size: 21px;
        border-radius: 50%;
        margin-left: 21px;
    }
</style>
<template>
<div>
    <div>
      <!-- left side bar fixed --> 
    <!-- menu left -->
    <nav  class="navbar navbar-default navbar-fixed-top" role="navigation" style="margin-bottom: 0; background-color: white;">
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
          <!--   <li style="display: block;">  -->
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
        <!-- filter view tickets -->
        <div class="navbar-default navbar-static-side nav-ins" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="side-menu">
                    <li>
                        <h4 class="view">
                            Views
                            <span class="back"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                        </h4>
                    </li>
                    <li><a href="#"> Danh sách tickets<span>0</span></a></li>
                    <li><a href="#">Tickets chưa giải quyết<span>2</span></a></li>
                    <li><a href="#">Tickets giải quyết gần đây<span>0</span></a></li>
                    <li><a href="#">Tickets đang chờ xử lý<span>3</span></a></li>
                    <li><a href="#">Tickets đã xóa<span>1</span></a></li>
                </ul>
            </div>
        </div>
        <!--end filter view tickets -->
    </nav>
    <!-- end menu left -->

    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 >Tickets đang chờ xử lý</h1>
                <h4 class="page-header hr-hd"><span>3</span> Tickets</h4>
            </div> 
        </div>

        <!--show thong bao khi xoa -->
        <div class="alert alert-success" role="alert">
            <span class="close-btn">&times;</span> 
            xóa Item thành công
        </div>
        <!--END show thong bao khi xoa -->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        List tickets
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <form role="form" class="form-inline zt-form" id="zt-form" action="" method="post">
                            <div class="zcontrols">
                                <div class="pull-right">
                                    <a href="#" type="button" class="btn btn-danger btn-sm btn-delete">Xóa lựa chọn</a>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" class="cbAll" />
                                            </th>
                                            <th>Message</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <!-- <th width="30%">Content</th> -->
                                            <th>Requested</th>
                                            <th>Email</th>
                                            <th>chat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="cid" value="5a9e5a96da67bc078421d7d6" />
                                            </td>
                                            <td>
                                                Tôi cần hỗ trợ
                                            </td>
                                            <td>
                                                Hậu
                                            </td>
                                            <td>
                                                <a href="admin123/item/change-status/5a9e5a96da67bc078421d7d6/active">
                                                    <span class="label label-success">active</span>
                                                </a>
                                            </td>
                                            <td> Yesterday 21:33</td>
                                            <td> hau@yahoo.com</td>
                                            <td>
                                                <a v-on:click="Ischeck=true" href="#" type="button" class="btn btn-info btn-sm ">Hỗ trợ</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input type="checkbox" name="cid" value="5abdc9aa598c600b6c7fd56b" />
                                            </td>
                                            <td>
                                                web tôi bị hư rồi không 
                                            </td>
                                            <td>
                                                văn Nam
                                            </td>
                                            <td>
                                                <a href="admin123/item/change-status/5abdc9aa598c600b6c7fd56b/active">
                                                    <span class="label label-success">active</span>
                                                </a>

                                            </td>
                                            <td>
                                                Yesterday 21:33
                                            </td>
                                            <td>
                                                hau@yahoo.com
                                            </td>
                                            <td>
                                                <a v-on:click="Ischeck=true" href="#" type="button" class="btn btn-info btn-sm ">Hỗ trợ</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input type="checkbox" name="cid" value="5af7d6a306b3d71a08df04b1" />
                                            </td>
                                            <td>
                                                làm sao lấy được port và ip của máy
                                            </td>
                                            <td>
                                                Vương
                                            </td>
                                            <td>
                                                <a href="admin123/item/change-status/5af7d6a306b3d71a08df04b1/active">
                                                    <span class="label label-success">active</span>
                                                </a>
                                            </td>
                                            <td>
                                                Yesterday 21:33
                                            </td>
                                            <td>
                                                hau@yahoo.com
                                            </td>
                                            <td>
                                                <a v-on:click="Ischeck=true" type="button" class="btn btn-info btn-sm ">Hỗ trợ</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="cid" value="5af7d6d506b3d71a08df04b2" />
                                            </td>
                                            <td>
                                                reponsive là gì
                                            </td>
                                            <td>
                                                đăng
                                            </td>
                                            <td>
                                                <a href="admin123/item/change-status/5af7d6d506b3d71a08df04b2/active">
                                                    <span class="label label-success">active</span>
                                                </a>
                                            </td>
                                            <td>
                                                Yesterday 21:33
                                            </td>
                                            <td>
                                                hau@yahoo.com
                                            </td>
                                            <td>
                                                <a type="button" v-on:click="Ischeck=true" class="btn btn-info btn-sm ">Hỗ trợ</a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <!-- end panel-body -->
                </div>
            </div>
            <!-- phan trang -->
            <div class="col-lg-12">
                <div class="ad-pagination">
                    <ul class="pagination text-center">
                        <li class="disabled"><a>«</a></li>
                        <li><a href="admin123/item/page=1">1</a></li>
                        <li ><a>2</a></li>
                        <li><a href="admin123/item/page=3">3</a></li>
                        <li><a href="admin123/item/page=4">4</a></li>
                        <li><a href="admin123/item/page=5">5</a></li>
                        <li><a href="admin123/item/page=0">»</a></li>

                    </ul>
                </div>  
            </div>
            <!---------------------BOX CHAT------------------>

            <div class="row" id="chatbox">
             <!--end Box chat-->
             <div class="col-sm-3  frame boxchat"  v-show="Ischeck">
                <div class="panel-heading top-bar">
                    <div class="col-md-8 col-xs-8">
                        <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> Văn Hậu </h3>
                    </div>
                    <div class="col-md-4 col-xs-4 btncl-mini" style="text-align: right;">
                        <a href="#"><span class="glyphicon glyphicon-minus minim_chat_window"></span></a>
                        <a href="#" ><span  style="visibility: collapse;" class="glyphicon glyphicon-new-window show_chat_window"></span></a>
                        <a href="#" v-on:click="Ischeck=false"><span style="color: red;" class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                    </div>
                </div>

                <hr/>
                <ul class="box-message"></ul> <!-- ---------------------------------load list message vao day -->
                <div class="sendmess">
                    <div class="msj-rta macro">                        
                        <div class="text text-r" style="background:whitesmoke !important">
                            <form id="form-io" action="#" method="post">
                                 <input class="mytext" id="mytext" placeholder="Nhập tin nhắn"/>
                                  <button type="submit" class="btn btn-success showshere" id="btnChat"> <span class="glyphicon glyphicon-share-alt"></span></button>
                            </form>
                        </div> 
                    </div>          
                </div>
                <!-- end box chat -->
            </div> 
        </div>
        <!-- end row chat-->
    </div>
</div>   
</div>
</div>
</template>
<script >
    import jwtDecode from 'vue-jwt-decode'
    //  $(function () {
    //      var socket = io.connect("http://localhost:8888");
    //         $('#form-io').submit(function(event){
    //              event.preventDefault();
    //              var data = {
    //                  user:'hau',//$("#user").val(),
    //                  message:$("#mytext").val()
    //              }
    //              socket.emit('data-message', data);
    //         });
    //         socket.on('send-message', function(msg){
                
    //             var chuoi ='<span class="sms-1"><i class="username">'+msg.user+'</i>:'+msg.message+'</span>';
    //             $('.box-message').append(chuoi);
    //         });
    // });
    // var me = {};
    // me.avatar = "@/assets/images/tv.png";

    // var you = {};
    // you.avatar = "./assets/images/user.png";

    // function formatAMPM(date) {
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var ampm = hours >= 12 ? 'PM' : 'AM';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0'+minutes : minutes;
    //     var strTime = hours + ':' + minutes + ' ' + ampm;
    //     return strTime;
    // }            

    // //-- No use time. It is a javaScript effect.
    // function insertChat(who, text, time){
    //     if (time === undefined){
    //         time = 0;
    //     }
    //     var control = "";
    //     var date = formatAMPM(new Date());
    //     if (who == "me"){
    //         control = '<li style="width:100%">' +
    //                         '<div class="msj macro">' +
    //                         '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
    //                             '<div class="text text-l">' +
    //                                 '<p>'+ text +'</p>' +
    //                                 '<p><small>'+date+'</small></p>' +
    //                             '</div>' +
    //                         '</div>' +
    //                     '</li>';                    
    //     }else{
    //         control = '<li style="width:100%;">' +
    //                         '<div class="msj-rta macro">' +
    //                             '<div class="text text-r">' +
    //                                 '<p>'+text+'</p>' +
    //                                 '<p><small>'+date+'</small></p>' +
    //                             '</div>' +
    //                         '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
    //                   '</li>';
    //     }
    //     setTimeout(
    //         function(){                        
    //             $(".box-message").append(control).scrollTop($(".box-message").prop('scrollHeight'));
    //         }, time);
        
    // }

    // function resetChat(){
    //     $(".box-message").empty();
    // }

    // $(".mytext").on("keydown", function(e){
    //     if (e.which == 13){
    //         var text = $(this).val();
    //         if (text !== ""){
    //             insertChat("me", text);              
    //             $(this).val('');
    //         }
    //     }
    // });

    // $('.showshere').click(function(){
    //     $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
    // })

    // //-- Clear Chat
    // resetChat();

    // //-- Print Messages
    // insertChat("you", "chào. tao cần hỗ trợ...", 0);  
    // insertChat("me", "Hi, dạ ", 1500);
    // insertChat("me", "Bạn muốn gì", 3500);
    // insertChat("you", "..............",7000);
    export default{
        data(){
           // console.log(localStorage.key);
           var name = localStorage.getItem('key');
            return {
                Ischeck: false,
                Email: name,
               // email: decoded.email
            
            }
        },
    }
    
   // $(function () {
   //      var socket = io.connect("http://localhost:8888");
   //      $('form').submit(function(event){
   //           event.preventDefault();
   //           var data = {
   //               user:'hau',//$("#user").val(),
   //               message:$("#mytext").val()
   //           }
   //           socket.emit('data-message', data);
   //      });
   //      socket.on('send-message', function(msg){
            
   //          var chuoi ='<span class="sms-1"><i class="username">'+msg.user+'</i>:'+msg.message+'</span>';
   //          $('.box-message').append(chuoi);
   //      });
   //  });
</script>
  
