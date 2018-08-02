/**
 * app tools
 */
import device from './device'

export default {
    
    openICityApp: function() {
        var jumpUrl = "icity://";
        var type = device.getBrowserType();
        if(type == 'chrome') {
            this.handleChrome(jumpUrl);
        } else if(type == 'safari') {
            this.handleSafari(jumpUrl);
        } else {
            this.handleJump(jumpUrl);
        }
    },

    /**
     * Chrome浏览器为了安全起见非手势行为阻止打开本地应用，手动触发可以
     */
    handleChrome: function(url) {
        if(console) {
            console.log("chrome浏览器不允许程序主动打开app");
        }
    },

    /**
     * 处理Safari浏览器，safari浏览器高版本不支持iframe跳转
     */
    handleSafari: function(url) {
        window.location.href = url;
    },

    /**
     * 处理其他浏览器
     */
    handleJump: function(url) {
        $(document.body).append('<iframe src="'+url+'" style="display:none;" onload="javascript:document.body.removeChild(this);"></iframe>');
    }

}