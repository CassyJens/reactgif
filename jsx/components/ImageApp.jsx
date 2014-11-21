/**
* @jsx React.DOM
*/
var Dash = require('./Dash');
var ImageComponent = require('./ImageComponent');
var ImageStore = require('../stores/ImageStore');

function getImageState() {
  return {imgURL: ImageStore.getLast()};
}

module.exports = React.createClass({
    render: function () {
      return (
        <div className="image-view">
          <Dash />
          <ImageComponent imgURL={this.state.imgURL} />
        </div>
      );
    },

    getInitialState: function () {
      return getImageState();
    },

    componentDidMount: function() {
      ImageStore.addChangeListener(this._onImageChange);
    },

    componentWillUnmount: function() {
      ImageStore.removeChangeListener(this._onImageChange);
    },

    _onImageChange: function () {
      console.log("image changed", getImageState());

      this.setState(getImageState());
    }
});
