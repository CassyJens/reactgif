/**
* @jsx React.DOM
*/
var Dash = require('./Dash');
var ImageComponent = require('./ImageComponent');
var KeyStore = require('../stores/KeyStore');

function getKeyState() {
  return {key: KeyStore.getKey()};
}

module.exports = React.createClass({
    render: function () {
      return (
        <div className="image-view">
          <Dash />
          <ImageComponent loading={this.state.loading} imgURL={this.state.imgURL} />
        </div>
      );
    },

    getInitialState: function () {
      return $.extend({loading: true, imgURL: ''}, getKeyState());
    },

    componentDidMount: function() {
      this.getImage(); // the first time it's mounted, get an image
      KeyStore.addChangeListener(this._onKeyChange);
    },

    componentWillUnmount: function() {
      KeyStore.removeChangeListener(this._onKeyChange);
    },

    getImage: function () {
      var that = this;

      this.setState({loading: true});
      $.get(this.state.key, function (json) {
        that.setState({imgURL: json.gif});
        $('.image').imagesLoaded().done(function () {
          that.setState({loading: false});
        });
      });
    },

    _onKeyChange: function () {
      var that = this;

      this.setState(getKeyState()); // need to cherry pick last key item
      this.getImage();
    }
});
