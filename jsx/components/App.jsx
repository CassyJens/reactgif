/**
* @jsx React.DOM
*/
var Dash = require('./Dash');
var Loading = require('./Loading');
var ImageApp = require('./ImageApp');
var LoadingActions = require('../actions/LoadingActions');
var ImageActions = require('../actions/ImageActions');

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "image/:apiKey": "apiKey",
    "image/:apiKey/:imgURL": "imgURL"
  },

  index: function () {
    React.render(<div id="main"> <Loading /> <Dash /> </div>, document.getElementById('app'));
  },

  apiKey: function (apiKey) {
    var that = this;

    React.render(<div id="main"> <Loading /> <ImageApp /> </div>, document.getElementById('app'));
    LoadingActions.set(true);
    $.get(apiKey, function (json) {
      that.navigate("image/" + apiKey + "/" + encodeURIComponent(json.gif), {
        trigger: true
      });
    });
  },

  imgURL: function (apiKey, imgURL) {
    ImageActions.create(imgURL);
    $('.image').imagesLoaded().done(function () {
      LoadingActions.set(false);
    });
  }
});

new Router();

Backbone.history.start();
