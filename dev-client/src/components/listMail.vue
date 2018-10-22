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
	margin: 5px 0 0 0;
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
                <li>Trương Văn Hậu</li>
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

            <!-- left side bar fixed --> 
           <!--   <div class="container">
                <div class="side-bar">
                    <ul class="side-left">
                        <li>
                            <a href="#"><i class="fa fa-th" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-home" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-book" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="glyphicon glyphicon-signal" ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="user-login">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                                <i class="fa fa-cog" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> -->
             <!-- hết side-bar -->

             <!-- filter view tickets -->
            <div class="navbar-default navbar-static-side nav-ins" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <h4 class="view">
                                Customer
                                <span class="back"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                            </h4>
                        </li>
                        <li>
                            <a href="#"> 
                                <p class="icon-user">
                                    <i class="fa fa-user"></i>
                                </p>
                                <b>Trường Văn Hậu </b>
                                <span>hau@yahoo.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"> 
                                <p class="icon-user">
                                    <i class="fa fa-user"></i>
                                </p>
                                <b>Nguyễn Trần Hoàng Nam </b>
                                <span>nam@yahoo.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"> 
                                <p class="icon-user ">
                                    <i class="fa fa-user"></i>
                                </p>
                                
                                <b>Nguyễn Hải Đăng </b>
                                <span>dang@yahoo.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"> 
                                <p class="icon-user ">
                                    <i class="fa fa-user"></i>
                                </p>
                                <b> Nguyễn Võ Minh Vương </b>
                                <span>vuong@yahoo.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
             <!--end filter view tickets -->
        </nav>
        <!-- end menu left -->

        <div id="page-wrapper">
            <div class="help-security">
                  <div class="row">
                    <div class="col-lg-12">
                        <span class="fa fa-envelope-o help-contact"></span>
                        <div class="help-wrapper">
                            <p>Hổ trợ về bảo mật</p>
                            <h4 class="info-employees">
                                <span>Ngày giờ</span> 
                                    > 
                                <span>Nhân viên 
                                    <a href="#">(change)
                                    </a>
                                </span> 
                                    >
                                <span>Via support@admin.com</span> 
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- hết help-security -->

            <div class="reply">
                <div class="row">
                    <div class="col-lg-1">
                        <span class="help-contact">P<i class="fa fa-user"></i></span>
                    </div>
                    <div class="col-lg-11">
                         <div class="reply-form">
                            <form action="" method="">
                                <div class="form-group" style="margin-left: 15px;">
                                    <label for="exampleFormControlTextarea1">Trả lời</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <div class="text-form">
                                        <div class="row">
                                            <div class="col-lg-1">
                                                <div class="T">
                                                    <a href="#" >T</a>
                                                </div>
                                                <div class="upload">
                                                    <i class="fa fa-upload" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div class="col-lg-10">
                                                <input type="text" class="form-control" name="">
                                            </div>
                                            <div class="col-lg-1">
                                                <span class="btn btn-info btn-block">send</span>
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
                    All message <span class="quantity badge badge-info">4</span>
                </div>
                <div class="customer-message">
                    <div class="row">
                        <span class="help-contact">P <i class="fa fa-user"></i></span>
                        <b class="name-customer">
                            Phương Trương <span>Tuesday 23:08 (<a href="">assign</a>)</span>
                        </b>
                        <p class="reply-customer">?</p>
                    </div>
                </div>
                <!-- hết 1 customer-message -->
                <div class="customer-message">
                    <div class="row">
                        <span class="help-contact">P <i class="fa fa-user"></i></span>
                        <b class="name-customer">
                            Phương Trương <span>Tuesday 23:08 (<a href="">assign</a>)</span>
                        </b>
                        <p class="reply-customer">?</p>
                    </div>
                </div>
                <!-- hết 1 customer-message -->
                <div class="customer-message">
                    <div class="row">
                        <span class="help-contact">P <i class="fa fa-user"></i></span>
                        <b class="name-customer">
                            Phương Trương <span>Tuesday 23:08 (<a href="">assign</a>)</span>
                        </b>
                        <p class="reply-customer">?</p>
                    </div>
                </div>
                <!-- hết 1 customer-message -->
            </div>
            <!-- hết message-info -->
        </div>    
    </div>

</template>