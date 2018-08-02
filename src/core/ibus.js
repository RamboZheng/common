import Vue from 'vue'

var __vueEventBus = new Vue();

export default {

    /**
     * 注册监听事件
     */
    on: function(eventname, cb) {
        __vueEventBus.$off(eventname);
        __vueEventBus.$on(eventname, cb);
    },

    /**
     * 注销监听事件
     */
    off: function(eventname) {
        __vueEventBus.$off(eventname);
    },

    /**
     * 提交行为
     */
    emit: function(eventname, data) {
        __vueEventBus.$emit(eventname, data);
    }

}