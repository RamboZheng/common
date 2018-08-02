
export default {

    toString: function(json) {
        try {
            return JSON.stringify(json);
        } catch(e) {
            return json;
        }
    },

    toJSON: function(jsonStr) {
        try {
            return JSON.parse(jsonStr);
        } catch(e) {
            return null;
        }
    }

}