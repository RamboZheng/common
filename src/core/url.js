
export default {
    /**
     * 获取url参数
     */
    queryString: function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var path = decodeURIComponent(window.location.search);
        var r = path.substr(1).match(reg);
        if(r!=null) return unescape(r[2]); return null;
    }

}