var express = require('express');
var gif = require('./src/js/service/gif');
var app = express();

var getKeyGif = function (key, res) {
  gif.randomGif(function (gif) {
      res.json({gif: gif});
  }, function () {
      res.json({gif: undefined});
  },{
    key: key
  });
};

/**
 * Serve static files.
 */
app.use(express.static(__dirname));

/**
 * Returns a random GIF source path to the client.
 */
app.get('/randomgif', function (req, res) {
    gif.randomGif(function (gif) {
        res.json({gif: gif});
    }, function () {
        res.json({gif: undefined});
    });
});

app.get('/i', function (req, res) {
  getKeyGif('i', res);
});

app.get('/you', function (req, res) {
  getKeyGif('you', res);
});

app.get('/cat', function (req, res) {
  getKeyGif('cat', res);
});

app.get('/gif', function (req, res) {
  getKeyGif('.gif', res);
});

app.get('/jpg', function (req, res) {
  getKeyGif('.jpg', res);
});

app.listen(8080);
