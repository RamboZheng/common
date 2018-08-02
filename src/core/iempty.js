import "./css/iempty.css"
import iconEmpty from './resources/icity-empty.png'

export default {
    id: "__iempty",
    textClass: 'icity-empty-text',

    /**
     * 显示
     */
    show: function(text) {
        this.initVars();
        if($('#'+this.id).length == 0) {
            $("body").append(this.div(this.id, this.textClass));
        }
        $('.'+this.textClass).html(text);
        this.position(this.id);
        $('#'+this.id).show();
    },

    /**
     * 初始化变量
     */
    initVars: function() {
        if(window.iemptyui == undefined) {
            window.iemptyui = this;
        }
    },

    /**
     * 关闭
     */
    hide: function() {
        if(window.iemptyui) {
            var id = '#'+window.iemptyui.id;
            if($(id).length > 0) {
                $(id).remove();
            }
        }
    },

    /**
     * 创建div模板
     */
    div: function(id, textClass) {
        var html =
            "<div class='icity-empty'>"+
                "<div id="+id+" class='icity-empty-dialog'>"+
                    "<div class='icity-empty-icon'><img src="+iconEmpty+"></div>"+
                    "<div class="+textClass+"></div>"+
                "</div>"+
            "</div>";
        return html;
    },

    /**
     * 布局位置
     */
    position: function(id) {
        $('#'+id).css("top", "3rem");
    }

}