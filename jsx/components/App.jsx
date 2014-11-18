/**
* @jsx React.DOM
*/
var Dash = require('./Dash');
var ImageApp = require('./ImageApp');
var KeyActions = require('../actions/KeyActions');

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "image/:apiKey": "image"
  },
  index: function () {
    React.render(<Dash />, document.getElementById('app'));
  },
  image: function (apiKey) {
    React.render(<ImageApp />, document.getElementById('app'));
    KeyActions.create(apiKey);
  }
});

new Router();

Backbone.history.start();
