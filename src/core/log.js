
export default {
    openLog: false,

    on: function(openLog) {
        this.openLog = openLog;
    },

    /**
     * debug info
     */
    d: function(mess) {
        if(this.openLog && console != undefined) {
            console.log(mess);
        }
    },

    /**
     * error info
     */
    e: function(mess) {
        if(console != undefined) {
            console.error(mess);
        }
    },

    print: function(message) {
		var isOutLog = sessionStorage.getItem('isOutLog');
		if(isOutLog == 1) {
			console.log(message);
		}
	}
};