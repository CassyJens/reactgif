var express = require('express');
var gif = require('./src/js/service/gif');
var app = express();

/**
 * Serve static files.
 */
app.use(express.static(__dirname));

/**
 * Returns a random GIF source path to the client.
 */
app.get('/gif', function (req, res) {
    gif.randomGif(function (gif) {
        res.json({gif: gif});
    }, function () {
        res.json({gif: undefined});
    });
});

app.listen(8080);
