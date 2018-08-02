import jsbridgeproxy from "./jsbridge";

/**
 * device's tool
 */
export default {

    isICity: function() {
        return jsbridgeproxy.isICity();
    },

    isPC: function() {
        var ua = navigator.userAgent;
        var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
        var isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        return !isAndroid && !isIOS;
    },

    isAndroid: function() {
        var ua = navigator.userAgent;
        return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
    },

    isIOS: function() {
        var ua = navigator.userAgent;
        return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    },

    isWeChat: function() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == 'micromessenger';
    },

    isChromeBrowser: function() {
        return this.getBrowserType() == 'chrome';
    },

    getBrowserType: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/chrome/i) == 'chrome' && ua.match(/version/i) != 'version') {
            return "chrome";
        } else if(ua.match(/mac os x/i) == 'mac os x' && ua.match(/safari/i) == 'safari') {
            return "safari";
        } else {
            return "unknown";
        }
    }

}