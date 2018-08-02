
export default {

    /**
     * 计算两个维度之间距离
     */
    distance: function(latX1, lngY1, latX2, lngY2) {
        var radLat1 = this.rad(latX1);
        var radLat2 = this.rad(latX2);
        var a = radLat1 - radLat2;
        var  b = this.rad(lngY1) - this.rad(lngY2);
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) 
            + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137;
        return Math.round(s * 10000) / 10000 * 1000;
    },

    rad: function(d) {
        return d * Math.PI / 180.0;
    }

}