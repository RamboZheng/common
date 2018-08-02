/**
 * @author luo.chao
 */
import './css/index.css'
import Vue from 'vue'

/**
 * main
 */
$(function() {
    var obj = new IndexObj();
    obj.initVue();
});

/**
 * class define
 */
function IndexObj() {
}

/**
 * init vue
 */
IndexObj.prototype.initVue = function(data) {
    var ctx = this;
    new Vue({
        el: '#J-app',
        data: {
        },
        methods: {
            showClick: function(type) {
                location.href = "./show.html?type="+type;
            }
        }
    });
};