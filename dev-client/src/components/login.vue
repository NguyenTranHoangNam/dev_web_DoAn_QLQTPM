<style scoped>
	 body{
        overflow-x: hidden;
     }
     .row {
        margin-left: -15px;
         margin-right: 0px;     
     }
    .search {
        position: relative;
        left: -6%;
    }

    .login{
    	padding: 60px 90px;
    	margin-top: 30px;
    }
    .login .login-image{
        background: #31708f;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: auto;
        font-size: 50px;
        text-align: center;
        overflow: hidden;
        margin-bottom: 30px;
    }
    .login .login-image span{
        margin-top: 35px;
        color: #ffffff;
    }
    .register{
    	padding: 60px 90px;
    	margin-top: 30px;
    }
    .register h2{
    	text-align: center;
    	position: relative;
    	padding-bottom: 15px;
    }
    .register h2::before{
    	content: "";
    	position: absolute;
    	bottom: 0;
    	left: 0;
    	width: 100%;
    	height: 1px;
    	background-color: #ccc;
    }
    .register p{
    	text-align: center;
    	color: #ccc;
    }
    .register .form-check-label{
    	color: #ccc;
    }
    .register .form-check-label span{
    	color: #74b9ff;
    }
    #page-wrapper{
    	margin: 0;
        min-height: 580px;
    }
    #page-wrapper .page-wrapper-content{
    	width: 100%;
    	text-align: center;
    }

    @media only screen and (max-width: 780px) {
        .navbar-toggle{
            visibility: hidden;
            opacity: 0;
        }
        .navbar-right{
            text-align: center;
        }
        .container .side-bar{
            visibility: hidden;
            opacity: 0;
        }
        #wrapper{
            padding: 0;
        }

        #page-wrapper .page-wrapper-content img{
            width: 100%;
        }
    }
    .team-logo{
        margin-top: 85px;
    }
    path{
        fill: none; 
        stroke: #5bc0de;
        stroke-width: 3; 
        stroke-dasharray: 1510; 
        opacity: 0;
        animation: animate 2s cubic-bezier(.4,.38,.73,.7) forwards;
    }
    .st2{
         animation-delay: 1s;
    }
    .st3{
         animation-delay: 2s;
    }
    .st4{
         animation-delay: 3s;
    }
    .st5{
        animation-delay: 4s;
    }
    @keyframes animate{
        0%{
            opacity: 0;
            fill: none;
            stroke-dashoffset: 1510;
            stroke: #ff9ff3;
        }
        10%{
            opacity: 1;
            fill: none;
            stroke-dashoffset: 1510;
            stroke: #feca57;
        }
        40%{
            opacity: 1;
            fill: none;
            stroke-dashoffset: 1510;
            stroke: #1dd1a1;
        }
        70%{
            opacity: 1;
            fill: none;
            stroke-dashoffset: 1510;
            stroke: #ee5253;
        }
        100%{
            opacity: 1;
            stroke-dashoffset: 0;
            stroke: #74b9ff;
        }
    }
    @media (min-width: 768px){
    	#page-wrapper {
        	padding: 0;
    	}
    }
    .container .side-bar {
        position: fixed;
        z-index: 5;
        left: 0;
        float: left;
        height: 100%;
        width: 53px;
        margin-top: 50px;
        background-color: #31708f;
    }
    @media (min-width: 768px){
        #page-wrapper {
            min-height: none; 
        }
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
               <li>
                            <a href="#" class="btn btn-is-disabled" :disabled="isCheckLogin == true" @click="changeIsCheckLogin" style="text-align: left;"><i class="fa fa-user fa-fw"></i> Login</a>
                        </li>
                          <li>
                            <a href="#" class="btn btn-is-disabled" :disabled="isCheckRegister == true"  @click="changeIsCheckRegister" style="text-align: left;"><i class="fa fa-gear fa-fw"></i> Register</a>
                        </li>
                </li> 
                <!-- /.dropdown -->
            </ul>
            <!-- end top bar -->

            <!-- left side bar fixed --> 
             <div class="container">
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
            </div>
             <!-- hết side-bar -->
        </nav>
        <!-- end menu left -->

        <div id="page-wrapper">
           <div class="row">
                <div v-if="isCheckLogin" class="col-sm-6 login-hidden-show">
                    <div class="login">
                        <div class="login-image">
                            <span class="fa fa-user"></span>
                        </div>
                        <form action="" method="post" v-on:submit.prevent="login">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username" v-model="formdata.email">
                            </div>
                             <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="formdata.password">
                            </div>
                            <button type="submit" class="btn btn-info btn-block">Login</button>
                        </form>
                    </div>
                </div>
                 <!-- hết login -->
                <div v-if="isCheckRegister" class="col-sm-6 register-hidden-show">
                    <div class="register">
                        <h2>Register</h2>
                        <p>Create your account. It's free or only takes a minute</p>
                        <form action="" method="" >
                            <div class="row">
                                <div class="col-sm-6">
                                     <div class="form-group">
                                        <input type="text" class="form-control" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                     <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Last Name">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                 <div class="col-sm-12">
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                 <div class="col-sm-12">
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Confirm Password">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" id="gridCheck">
                                  <label class="form-check-label" for="gridCheck">
                                    I accept the <span>Terms of User & Privacy Policy</span>
                                  </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-info  btn-block">Register</button>
                        </form>
                    </div>
                </div>
                <!-- hết register -->
                <div class="col-sm-6">
                    <div class="team-logo">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1094 479" style="enable-background:new 0 0 1094 479;" xml:space="preserve">
                            <g>
                                <path class="st1" d="M227.6,89.2c-0.7,5.7-3.8,9.2-9.5,10.5c-6.2,0.5-9.8-1.5-11-6.1c-4.9-20.5-12.7-34.9-23.3-43.1
                                    c-10.7-8.2-26.9-12.3-48.7-12.3c-15.6,0-28.8,3.9-39.6,11.7C83.6,58.5,77.7,70.2,77.7,85c0,13,3.5,24.3,10.6,33.9
                                    c7.1,9.6,21.2,21.6,42.4,36.1c31.9,21.8,53.8,40,65.7,54.7c11.9,14.6,17.8,30.8,17.8,48.3c0,29-11,51.9-33,68.8
                                    c-20.3,15.8-46.2,23.7-77.6,23.7c-56.3,0-87.3-9.2-93-27.6c-3.1-10.3-5.5-23.9-7.1-41c-0.7-8,2-13.1,8.1-15.4
                                    c4.1-1.6,6.8-2.3,8.3-2c1.8,0.7,3.6,2.9,5.4,6.8c16.1,38.1,42.7,57.1,79.8,57.1c21.2,0,37.9-4.6,50.3-13.7
                                    c13.2-9.6,19.8-23.3,19.8-41c0-12.7-3.7-23.9-11.2-33.7c-8.3-10.7-25.1-25-50.3-42.7C84.3,177.1,64.8,161,55,149.3
                                    c-10.9-13.3-16.4-28.6-16.4-45.7c0-26.4,10.1-47.5,30.3-63.5c20.2-15.9,46.1-23.9,77.6-23.9c26.7,0,47.2,2.6,61.5,7.8
                                    c5.4,2.1,9.4,4,12,5.6c4.6,2.8,7.1,6.1,7.6,10C229.6,53.5,229.6,70,227.6,89.2z"/>
                                <path class="st2" d="M481.5,305.5c-19.7,26.4-37.4,39.6-53,39.6c-15,0-22.5-7.6-22.5-22.9c0-7.6,1.1-19.3,3.4-34.9
                                    c0.2-1.6-0.3-2.5-1.5-2.7c-1.3-0.3-2.4,0.4-3.4,2.2c-24.4,40.5-49.8,60.8-76.2,60.8c-12.2,0-22-3.6-29.3-10.7
                                    c-7.8-7.8-11.7-18.7-11.7-32.7c0-9.8,4.4-32.9,13.2-69.3c6.2-26.7,9.3-43.4,9.3-50c0-4.7-2.6-7.1-7.8-7.1
                                    c-4.6,0-13.1,7.5-25.6,22.5c-0.3,0.3-0.7,0.5-1.2,0.5c-1.5,0-3.1-1-5-3.1c-1.9-2-2.8-3.9-2.8-5.5c0-0.8,0.2-1.5,0.5-2
                                    c20.3-26.4,38.2-39.6,53.7-39.6c16.3,0,24.4,6.7,24.4,20c0,6-4,27.4-12,64.2c-7,32.1-10.5,50.7-10.5,55.9
                                    c0,16.6,7.8,24.9,23.4,24.9c11.9,0,24.9-10.9,39.1-32.7c15.3-23.6,25.8-51.3,31.5-83.3l6.8-39.1c1.3-6.8,8.3-10.8,21-12
                                    c8.5-0.6,12.9,0.2,13.4,2.7c0.2,1.1,0.1,2.9-0.2,5.4C445.5,228.4,439,274.5,439,295c0,15.5,2.7,23.2,8.1,23.2
                                    c4.7,0,13.5-7.4,26.4-22.2c0.3-0.2,0.7-0.3,1.2-0.5c1.3,0,2.8,1.1,4.6,3.2c1.8,2.1,2.7,4,2.7,5.6
                                    C481.8,304.8,481.7,305.2,481.5,305.5z"/>
                                <path class="st3" d="M699,211c0,38.4-11.3,70.6-33.9,96.7C641.5,334.6,618,348,594.5,348c-10.7,0-23.4-1-38.1-2.9
                                    c-2.8,18.1-7.1,44.6-12.9,79.6c-0.5,2.6-0.7,4.7-0.7,6.3c0,4.6,1.8,7.8,5.4,9.8c3.6,2,10.7,3.7,21.5,5.4c5.7,0.8,9,1.5,10,2
                                    c3.3,1.5,4.4,4.3,3.4,8.5c-1.3,5.4-4.3,8.1-9,8.1c-21,0-41,1.1-60.1,3.4c-8.3,1-12.5-0.9-12.5-5.6c0-1.3,1.2-6.1,3.7-14.4
                                    c2.4-9,3.9-14.6,4.4-17.1l32.5-209c-4.4,2.8-14.1,8.6-29.1,17.6c-4.2,2.6-7.2,1.6-9-2.9c-1.8-5-0.7-8.9,3.2-11.5
                                    c2.9-2.1,8.9-6.3,18.1-12.6c9.1-6.3,16-11.1,20.8-14.5c4.1-19.4,7.7-34.3,11-44.9c6.7-21.5,13.3-33.9,20-37.1c5.4-2.6,9-3.9,11-3.9
                                    c2.8,0,4.2,2.4,4.2,7.1c0,2-0.2,4.4-0.5,7.3c-1.1,7.5-3.5,23.2-7.1,47.1c28.3-16.8,50.5-25.1,66.4-25.1
                                    C683,148.5,699,169.4,699,211z M660,221c0-27-8.6-40.5-25.9-40.5c-11.9,0-29.7,6.3-53.5,19c-3.9,23.6-9.8,60.3-17.6,110.1
                                    c17.9,8,34.3,12,49.1,12c11.7,0,22.2-8.2,31.5-24.7C654.5,277.8,660,252.4,660,221z"/>
                                <path class="st4" d="M889.5,186.6c0,17.4-9.3,32.1-27.8,44.2c-17.7,11.6-48.3,23.4-91.6,35.4c0.6,18.6,5,32.7,13.2,42.5
                                    c7.2,8.6,16.2,12.9,27.1,12.9c14.3,0,29.1-5.2,44.2-15.6c5.5-3.7,9.8-4.9,12.9-3.4c3.4,2.3,5.1,5.1,5.1,8.5c0,2.6-1.2,5-3.7,7.1
                                    c-24.3,18.9-48.1,28.3-71.5,28.3c-43,0-64.5-24.5-64.5-73.5c0-36.6,10.7-66.7,32-90.3c20.2-22.5,44.3-33.7,72.5-33.7
                                    C872.1,149,889.5,161.5,889.5,186.6z M850.4,195.6c0-7.8-2.4-14.2-7.2-19.2c-4.8-5-11-7.4-18.7-7.4c-13.3,0-25.1,7.2-35.4,21.5
                                    c-11.1,15.5-17.3,35.5-18.6,60.1c30.9-9.9,52-18.8,63.1-26.5C844.8,216.4,850.4,206.9,850.4,195.6z"/>
                                <path class="st5" d="M1085.5,170.5c-6.2,20-12.4,30-18.6,30c-2.3,0-7.5-1.8-15.7-5.5c-8.2-3.7-14.4-5.5-18.4-5.5
                                        c-8,0-17.7,9.9-29.3,29.8c-12.9,22-22.4,47.7-28.6,77.1l-7.6,36.1c-1.5,7.2-8.6,11.1-21.5,12c-4.7,0.3-8.1-0.2-10.3-1.5
                                        c-2.1-1.3-2.8-3.5-2.2-6.6c5-23.6,10.2-47.1,15.4-70.6c5.7-29.3,8.5-53.2,8.5-71.8c0-11.1-2.3-16.6-6.8-16.6
                                        c-5.2,0-14.2,7.5-27.1,22.5c-0.3,0.3-0.8,0.5-1.5,0.5c-1.5,0-3-1-4.6-2.9c-1.6-2-2.4-3.8-2.4-5.6c0-0.8,0.2-1.5,0.5-2
                                        c19.9-26.4,38.2-39.6,54.9-39.6c8.3,0,13.9,1.7,16.7,5c2.8,3.3,4.3,9.2,4.3,17.7c0,5.9-1.6,17.8-4.9,35.9c-0.3,1.3,0.2,2.1,1.5,2.4
                                        c1.3,0.3,2.4-0.3,3.4-2c9.6-15.5,20.5-28.6,32.7-39.6c15.9-14.3,31.1-21.5,45.4-21.5c12.2,0,18.3,3.4,18.3,10.3
                                        C1087.7,161.5,1087,165.5,1085.5,170.5z"/>
                            </g>
                        </svg>
                    </div>
                </div>
           </div>
        </div>    
    </div>


</template>

<script>
    import router from '../router'
    //import EventBus from './EventBus'
	export default{
          data(){
            return {
                isCheckLogin: true,
                isCheckRegister: false,
                title:"Form Login",
				formdata:{}
            }
        },
        methods: {
                changeIsCheckLogin: function(){
                    this.isCheckLogin = !this.isCheckLogin;
                    this.isCheckRegister = !this.isCheckRegister;
                },
                changeIsCheckRegister: function(){
                    this.isCheckLogin = !this.isCheckLogin;
                    this.isCheckRegister = !this.isCheckRegister;
                },
                login(){// chuoi json can nhan {success: 1, email: "hotdau1@yahoo.com", fullname: "anh yêu"}
                this.axios.post("http://localhost:8888/form-login",this.formdata)
                    .then((response) => {
                        console.log(response.data);
                        localStorage.setItem('key',response.data.fullname);
                        if(response.data.success==1){
                             router.push({ name: 'listTickets' });
                        }
                     }).catch(err => {
                        console.log(err)
                    })
                    
            },
         }
    };
</script>