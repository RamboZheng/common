import './css/loading.css'
import jsbridge from '../core/jsbridge'

export default {
    id: "__loading",

    /**
     * 显示
     */
    show: function(delay) {
        if(jsbridge.isICity()) {
            delay = delay ? delay : 0;
            setTimeout(function() {
                jsbridge.showLoading();
            }, delay);
        } else {
            if($("#"+this.id).length == 0) {
                $("body").append(this.div(this.id));
            }
            this.position();
            $("#"+this.id).show();
        }
    },

    /**
     * 隐藏
     */
    hide: function() {
        if(jsbridge.isICity()) {
            jsbridge.hideLoading();
        } else {
            var id = "#"+this.id;
            if($(id).length > 0) {
                $(id).hide();
            }
        }
    },

    /**
     * 创建div模板
     */
    div: function(id) {
        var html = 
            "<div id="+id+" class='loading-box'>"+
                "<div class='render-circle'>"+
                    "<div class='circle'>"+
                        "<div class='right-bottom'>"+
                            "<div class='render-right-bottom'></div>"+
                            "<div class='round-red'></div>"+
                            "<div class='round-orange'></div>"+
                            "<div class='circle-inner'>"+
                                "<div class='render-circle-inner'></div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "<div>";
        return html;
    },

    /**
     * 布局定位
     */
    position: function() {
        var height = window.screen.availHeight;
        var dpr = $("html").attr("data-dpr");
        if(dpr != undefined) {
            height = height * dpr;
        }
        var html = $("html")[0];
        var circleHeight = 130;
        if(html.style.fontSize != undefined) {
            circleHeight = html.style.fontSize.replace("px", "") * 3.5 * 0.7;
        }
        $("#"+this.id).css("top", ((height-circleHeight)/2)+"px");
    }

}