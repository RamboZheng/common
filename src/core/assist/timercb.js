export default {
    /**
     * 获取timercb实例
     */
    getInstance: function() {
        if(window.timercb == undefined) {
            window.timercb = {};
        }
        return window.timercb;
    },

    /**
     * 初始化变量
     */
    initVars: function() {
        var ctx = this.getInstance();
        ctx.isExcuted = false;
        ctx.originCallback = undefined;
        ctx.cbParamsCount = 0;
        ctx.isTimeout = false;
    },
    
    /**
     * 创建代理回调函数
     */
    create: function(callback, timeout) {
        var ctx = this;
        var params = ctx.getInstance();
        ctx.initVars();
        params.cbParamsCount = callback.length;
        params.originCallback = callback;
        timeout = timeout == undefined ? 3000 : timeout;
        setTimeout(function() {
            if(!params.isExcuted) {
                params.isExcuted = true;
                ctx.isTimeout = true;
                params.originCallback();
            }
        }, timeout);

        return ctx.proxyCB;
    },

    /**
     * 代理函数
     */
    proxyCB: function(resp) {
        var params = window.timercb;
        if(!params.isExcuted) {
            params.isExcuted = true;
            if(params.cbParamsCount > 0) {
                params.originCallback(resp);
            } else {
                params.originCallback();
            }
        }
    }

}