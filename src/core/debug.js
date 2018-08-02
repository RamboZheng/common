import iajax from './iajax'

export default {

    /**
     * 发送打印的调试信息
     */
    send: function(domain, message) {
        iajax.http({
            url: domain + '/app/core/trace',
            data: {
                msg: message
            }
        }, function(data){}, function(err){
            return true;
        })
    }

}