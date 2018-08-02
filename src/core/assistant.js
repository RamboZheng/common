import jsbridge from './jsbridge'
import urltools from './url'
import json from './json'

export default {
    /**
     * 以活动方式打开页面
     */
    openPageByActivity: function(url, params) {
        var content = JSON.stringify({
            "icon": params.icon,
            "shareUrl": params.shareUrl,
            "title": params.title,
            "desc": params.desc
        });
        var c = url.substring(url.length-1);
        if(c != '?') {
            url = url.indexOf('&') < 0 ? url+'?' : url+'&';
        }
        location.href = url+"sharecontent="+encodeURIComponent(content);
    },

    /**
     * 通过location.href显示分享状态
     */
    checkShareStateByLocation: function() {
        var content = urltools.queryString('sharecontent');
        if(!content) {
            return ;
        }

        content = decodeURIComponent(content);
        var jsonObj = json.toJSON(content);
        if(jsonObj == null) {
            console.error("json parse fail.");
            return ;
        }

        jsbridge.setShareContent({
            icon: jsonObj.icon,
            shareUrl: jsonObj.shareUrl,
            title: jsonObj.title,
            desc: jsonObj.desc
        })
    }
}