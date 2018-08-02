
export default {

    /**
     * sessionstorage
     */
    session: {
        save: function(key, value) {
            sessionStorage.setItem(key, value);
        },

        get: function(key) {
            return sessionStorage.getItem(key);
        },

        remove: function(key) {
            sessionStorage.removeItem(key);
        }
    },

    /**
     * localstorage
     */
    local: {
        save: function(key, value) {
            localStorage.setItem(key, value);
        },

        get: function(key) {
            return localStorage.getItem(key);
        },

        remove: function(key) {
            localStorage.removeItem(key);
        }
    }

}