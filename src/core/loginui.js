import "./style/common.css"
import "./css/authui.css"
import authicon from './resources/icity-authui-icon.png'

export default {
    id: "__loginui",
    callback: undefined,

    /**
     * 显示
     */
    show: function(callback) {
        this.initVars();
        this.callback = callback;
        if($('#'+this.id).length == 0) {
            $("body").append(this.div(this.id));
        }
        $('#'+this.id).show();
    },

    /**
     * 初始化变量
     */
    initVars: function() {
        if(window.iloginui == undefined) {
            window.iloginui = this;
        }
    },

    /**
     * 关闭
     */
    hide: function() {
        if($('#'+window.iloginui.id).length > 0) {
            $('#'+window.iloginui.id).remove();
        }
    },

    /**
     * 触发点击事件
     */
    call: function() {
        if(window.iloginui.callback != undefined) {
            window.iloginui.callback();
        }
    },

    /**
     * 创建div模板
     */
    div: function(id) {
        var html =  
            "<div id="+id+" class='icity-authui-bg'>"+
                "<div class='icity-authui'>"+
                    "<div class='icity-authui-con'><img src="+authicon+"></div>"+
                    // "<div class='icity-acu-txt1'>需要登录</div>"+
                    "<div class='icity-acu-txt2'>使用该应用需要您登录</div>"+
                    "<div class='icity-btn' onclick='javascript:window.iloginui.call()'>立即登录</div>"+
                "</div>"+
            "</div>";
        return html;
    }

}