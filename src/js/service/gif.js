var http = require('http');
var request = require('request');

module.exports = {
    /**
     * Retrieves a random gif and calls success/function w/that gif.
     * @param {function} success
     * @param {function} error
     */
    randomGif: function (success, error, options) {
        options = options || {};
        var key = options.key ? options.key : '';
        console.log("key is", key);

        http.get("http://bukkit.tangentialism.com/" + key, function (res) {
          console.log(res.headers.location);
            success(res.headers.location);
        }).on('error', function (e) {
            error(e);
        });
    }
}
