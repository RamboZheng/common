
import "./css/toast.css"

export default {
    id: "#__toast",
    textId: '.icity-toast-text',

    /**
     * 显示
     */
    show: function(text) {
        var ctx = this;
        if($(this.id).length == 0) {
            $("body").append(this.div());
        }
        $(this.textId).html(text);
        this.position();
        $(this.id).show(1000);
        setTimeout(function() {
            ctx.hide();
        }, 3000);
    },

    /**
     * 隐藏
     */
    hide: function() {
        if($(this.id).length > 0) {
            $(this.id).hide(1500);
        }
    },

    /**
     * 创建div模板
     */
    div: function() {
        var html =
            "<div id='__toast' class='icity-toast'>"+
                "<div class='icity-toast-text'></div>"+
            "</div>";
        return html;
    },

    /**
     * 布局定位
     */
    position: function() {
        var height = window.screen.height;
        var dpr = $("html").attr("data-dpr");
        if(dpr != undefined) {
            height = height * dpr;
        }
        var html = $("html")[0];
        var circleHeight = 130;
        if(html.style.fontSize != undefined) {
            circleHeight = html.style.fontSize.replace("px", "")*2.7;
        }
        $(this.id).css("top", (height/2-circleHeight)+"px");
    }

}