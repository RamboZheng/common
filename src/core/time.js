
export default {
    
    /**
     * 获取当前日期，年月日，例如：2017-09-01
     */
    getCurrentDate: function() {
        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        if(month < 10) {
            month = '0' + month;
        }
        if(day < 10) {
            day = '0' + day;
        }
        return date.getFullYear()+"-"+month+"-"+day;
    },

    /**
     * 获取当前日期，年月日，例如：2017/09/01
     */
    getCurrentDate2: function() {
        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        if(month < 10) {
            month = '0' + month;
        }
        if(day < 10) {
            day = '0' + day;
        }
        return date.getFullYear()+"/"+month+"/"+day;
    },


    /**
     * 获取日期对象，包含年月日
     */
    getYearMonthDate: function() {
        var date = new Date();
        return {
            year: date.getFullYear(),
            month: date.getMonth()+1,
            date: date.getDate()
        };
    },

    /**
     * 毫秒转日期，例如2007-09-01
     */
    toBaseDate: function(millisecond) {
        var date = new Date(millisecond);
        var month = date.getMonth()+1;
        var day = date.getDate();
        if(month < 10) {
            month = '0' + month;
        }
        if(day < 10) {
            day = '0' + day;
        }
        return date.getFullYear()+"-"+month+"-"+day;
    },

    /**
     * 毫秒转日期，例如：1970/1/18 上午10:23:06
     */
    toLocaleDate: function(millisecond) {
        var date = new Date(millisecond) ;
        return date.toLocaleString();
    }

}