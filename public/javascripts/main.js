/*import * as $ from 'jquery'
import 'popper';*/
import 'bootstrap';
import '../stylesheets/style.css';
import '../stylesheets/bootstrap.theme.min.css';
//import '../images/earth.png';
import xml from '../other/1.xml';

console.log(xml);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});