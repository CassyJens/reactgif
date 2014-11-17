/**
* @jsx React.DOM
*/
var Dash = require('./Dash');
var ImageApp = require('./ImageApp');

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "image/:key": "image"
  },
  index: function () {
    React.render(<Dash />, document.getElementById('app'));
  },
  image: function (key) {
    React.render(<ImageApp description={key} />, document.getElementById('app'))
  }
});

new Router();

Backbone.history.start();
