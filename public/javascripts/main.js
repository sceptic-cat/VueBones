import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../stylesheets/style.css'
import '../stylesheets/bootstrap.theme.min.css'
import Vue from 'vue'
//import '../images/earth.png'
//import xml from '../other/1.xml'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//console.log(xml);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import App from './App.vue'

//Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');