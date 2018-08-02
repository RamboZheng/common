import './css/dialog.css'

export default {
    id: "__confirmdialogbg",
    dialogId: "__confirmdialog",
    textClass: "__confirmdialogtext",
    iconNode: '',
    callback: undefined,

    /**
     * 显示
     */
    show: function(text, callback, optional) {
        this.initVars();
        this.callback = callback;
        if(optional && optional.icon) {
            this.iconNode = "<div class='__icity-dialog-icon'><img src="+optional.icon+"></div>";
        }
        if($("#"+this.id).length == 0) {
            $("body").append(this.div(this.id, this.dialogId, this.textClass, this.iconNode));
        }
        $("."+this.textClass).html(text);
        this.position(this.dialogId);
        $("#"+this.id).show();
    },

    /**
     * 初始化变量
     */
    initVars: function() {
        if(window.iconfirmdialog == undefined) {
            window.iconfirmdialog = this;
        }
    },

    /**
     * 隐藏
     */
    hide: function() {
        var id = "#" + window.iconfirmdialog.id;
        if($(id).length > 0) {
            $(id).remove();
        }
    },

    call: function(type) {
        window.iconfirmdialog.hide();
        if(window.iconfirmdialog.callback != undefined) {
            window.iconfirmdialog.callback(type);
        }
    },

    /**
     * 创建div模板
     */
    div: function(id, dialogId, textClass, iconNode) {
        var html = 
            "<div id="+id+" class='__icity-dialog-bg'>"+
                "<div id="+dialogId+" class='__icity-dialog'>"+
                    "<div class='__icity-dialog-con'>"+iconNode+
                        "<div class="+textClass+"></div>"+
                        "<div class='__icity-dialog-btn'>"+
                            "<span class='cancel' onclick='window.iconfirmdialog.call(0)'>取消</span>"+
                            "<span class='confirm' onclick='window.iconfirmdialog.call(1)'>确定</span>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "<div>";
        return html;
    },

    /**
     * 布局定位
     */
    position: function(id) {
        var height = window.screen.availHeight;
        var dpr = $("html").attr("data-dpr");
        if(dpr != undefined) {
            height = height * dpr;
        }
        var html = $("html")[0];
        var circleHeight = 130;
        if(html.style.fontSize != undefined) {
            circleHeight = html.style.fontSize.replace("px", "") * 3;
        }
        $("#"+id).css("top", (height/2-circleHeight)+"px");
    }

}