
<style scoped>
    .col-sm-4.search {
        position: relative;
        right: 59px;
    }
    #form-io{
        width: max-content;
    }
    .showshere {
        background: #736666;
        /* padding: 10px; */
        font-size: 21px;
        border-radius: 3px 90px 85px 4px;
        height: 48px;
        margin-top: 6px;
    }
    .alert-success {
        display: none;
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
            <li class="tenname">{{Email}}</li>
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
                    <li><a href="#"> Danh sách khách cần hỗ trợ<span class="allist">0</span></a></li>
                    <li><a href="#">khách chưa hỗ trợ<span class="new">2</span></a></li>
                    <li><a href="#" >Khách đã hỗ trợ<span class="proc">0</span></a></li>
                   
                </ul>
            </div>
        </div>
        <!--end filter view tickets -->
    </nav>
    <!-- end menu left -->

    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 >Hỗ trợ khách hàng online</h1>
                <h4 class="page-header hr-hd"><span class="ngayhientai">  </span>{{Email}}</h4>
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
                                                <a href="#">
                                                    <span class="label label-success">active</span>
                                                </a>
                                            </td>
                                            <td> Yesterday 21:33</td>
                                            <td> hau@yahoo.com</td>
                                            <td>
                                                <a v-on:click="Ischeck=true" href="#" type="button" class="btn btn-info btn-sm ">Hỗ trợ</a>
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
                        <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> <i> Văn Hậu </i><div style="display: none;"></div></h3>
                    </div>
                    <div class="col-md-4 col-xs-4 btncl-mini" style="text-align: right;">
                          <!--button hidden chat-->
                        <a ><span class="glyphicon glyphicon-minus minim_chat_window"></span></a>
                        <!--button show chat-->
                          <a ><span  style="visibility: collapse;" class="glyphicon glyphicon-new-window show_chat_window"></span></a>
                        <a  v-on:click="Ischeck=false"><span style="color: red;" class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                    </div>
                </div>

                <hr/>
                <ul class="box-message"></ul> <!-- ---------------------------------load list message vao day -->
               <div class="sendmess">
                    <div class="msj-rta macro">                        
                        <div class="text text-r" style="background:whitesmoke !important">
                            <input class="mytext" placeholder="Nhập tin nhắn"/>
                        </div> 
                    </div>
                    <div style="padding:10px;" class="showshere">
                        <span class="glyphicon glyphicon-share-alt"></span>
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

    import jwtDecode from 'vue-jwt-decode';
    // import {box} from '../assets/js/boxchat.js';
    //import {custom} from '../assets/js/custom.js';
    import {eventBus} from '../main.js';
    export default{

        data(){

           // console.log(localStorage.key);
           var name = localStorage.getItem('key');
           // location.reload();  

            return {
                Ischeck: false,
                Email: name,
                flag:''
            }
        },
         watch:{
            '$route'(to,from){
                //alert(to.params.idtk);
               // this.$router.push('/listTickets');
                //window.location.replace('http://localhost:8080/#/list-tickets');
            }
        },
         created(){
            this.reloadPage();
          
        },  
         methods:{
            reloadPage:function() {
                if(this.Email != ''){
                    window.location.replace('http://localhost:8080/#/list-tickets');
                }
            }
       }
     


    }

</script>
  
