<style scoped>
    a.rou {
        padding-left: 2px !important;
    }
</style>
<template>
            <!-- left side bar fixed --> 
             <div class="container">
                <div class="side-bar">
                    <ul class="side-left">
                        <li>
                                <a href="#"><i class="fa fa-th" aria-hidden="true">
                                </i></a>
                        </li>
                        <li>
                            <a href="#">
                                 <router-link class="rou"  :to="{name:'listTickets'}"><i class="fa fa-home" aria-hidden="true"></i></router-link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <router-link class="rou" :to="{name:'listMail'}">
                                    <i class="fa fa-book" aria-hidden="true"></i>
                                </router-link>
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
   <!--  </div> -->
</template>

<script>
   // import listTicket from './listTickets.vue';
   //  export default {
   //      components: {
   //          applistTicket:listTicket,
   //      }
   //  };
</script>



