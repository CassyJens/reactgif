/**
* @jsx React.DOM
*/
var Dash = require('./Dash');
var ImageComponent = require('./ImageComponent');
// var ImageStore = require('./stores/ImageStore');

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
      return {loading: true, imgURL: ''};
    },

    componentDidMount: function () {
      this.getImage();
    },

    getImage: function () {
      var that = this;

      this.setState({loading: true});
      $.get(this.props.description, function (json) {
        that.updateImage(json.gif);
      });
    },

    updateImage: function (url) {
      var that = this;
      this.setState({imgURL: url});

      $('.image').imagesLoaded().done(function () {
        that.setState({loading: false});
      });
    }
});
