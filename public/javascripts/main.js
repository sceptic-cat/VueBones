/*import * as $ from 'jquery'
import 'popper';*/
import 'bootstrap';
import '../stylesheets/style.css';
import '../stylesheets/bootstrap.theme.min.css';
import Vue from '@Vue';
//import '../images/earth.png';
import xml from '../other/1.xml';

console.log(xml);

import App from './App.vue'

//Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
