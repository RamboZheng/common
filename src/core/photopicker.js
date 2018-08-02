import "./css/photopicker.css"

export default {
    id: "__photopicker",
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
        $('#iPhotopicker').show();
    },

    /**
     * 初始化变量
     */
    initVars: function() {
        if(window.iphotopicker == undefined) {
            window.iphotopicker = this;
        }
    },

    /**
     * 关闭
     */
    hide: function() {
        var id = "#"+window.iphotopicker.id;
        if($(id).length > 0) {
            $(id).hide(0);
        }
    },

    /**
     * 点击事件
     */
    call: function(type) {
        if(window.iphotopicker.callback != undefined) {
            window.iphotopicker.callback(type);
            window.iphotopicker.hide();
        }
    },

    div: function(id) {
        var html =
            "<div id="+id+" class='icity-photopicker-bg'><div id='iPhotopicker' class='icity-photopicker'>"+
                "<div class='icity-photopicker-content'>"+
                    "<div class='icity-photopicker-item icity-photopicker-gallery' onclick='javascript:window.iphotopicker.call(0)'>拍照</div>"+
                    "<div class='icity-photopicker-item icity-photopicker-camera' onclick='javascript:window.iphotopicker.call(1)'>从手机相册选择</div>"+
                "</div>"+
                "<div class='icity-photopicker-cancel' onclick='javascript:window.iphotopicker.hide()'>取消</div>"+
            "</div>";
        return html;
    }

}