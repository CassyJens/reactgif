var http = require('http');
var request = require('request');

module.exports = {
    /**
     * Retrieves a random gif and calls success/function w/that gif.
     * @param {function} success
     * @param {function} error
     */
    randomGif: function (success, error) {
        http.get("http://bukkit.tangentialism.com/", function (res) {
            success(res.headers.location);
        }).on('error', function (e) {
            error(e);
        });
    }
}
