// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


require('./assets/css/bootstrap.min.css');
require('./assets/font-awesome/css/font-awesome.css');
require('./assets/css/sb-admin.css');
require('./assets/css/custom.css');
require('./assets/css/style.css');

require('./assets/js/vue.js');
require('./assets/js/jquery-1.10.2.js');
require('./assets/js/bootstrap.min.js');
require('./assets/js/plugins/metisMenu/jquery.metisMenu.js');
require('./assets/js/sb-admin.js');
require('./assets/js/jquery-ui.js');
require('./assets/js/custom.js');
//require('./assets/js/boxchat.js');
export const eventBus = new Vue();
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

