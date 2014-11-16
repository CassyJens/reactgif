/**
* @jsx React.DOM
*/
var Dash = require('./Dash');
var ImageContainer = require('./ImageContainer');

$(function () {
  var App = React.createClass({
    getInitialState: function () {
      return {route: '', url: '', imageText: ''}; // TODO only should care about route
    },

    updateImage: function (url) { // TODO move this somewhere?
      var that = this;
      this.setState({route: 'image', url: url, loading: true});

      $('.image').imagesLoaded().done(function () {
        that.setState({loading: false});
      });
    },

    render: function () {
      if (this.state.route === '') {
        return (
          <Dash updateImage={this.updateImage} />
        );
      } else if (this.state.route === 'image') {
        return (
          <div className="image-view">
            <Dash updateImage={this.updateImage} />
            <ImageContainer loading={this.state.loading} url={this.state.url} />
          </div>
        );
      }
    }
  });

  React.render(<App />, document.getElementById('app'));
});
