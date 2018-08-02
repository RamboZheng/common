import '../encrypt/base64'

export default {

    encode: function(value) {
        if(!value) {
            return value;
        }

        var result = Base64.encode(encodeURIComponent(value));
        result = result.replace('=', '$');
        return result;
    },

    decode: function(value) {
        if(!value) {
            return value;
        }
        
        var result = value.replace('$', '=');
        return decodeURIComponent(Base64.decode(value));
    }

}