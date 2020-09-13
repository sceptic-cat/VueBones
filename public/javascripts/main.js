import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../stylesheets/style.css'
import '../stylesheets/bootstrap.theme.min.css'
import Vue from 'vue'
//import '../images/earth.png'
//import xml from '../other/1.xml'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

//console.log(xml);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import App from './App'

//Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
