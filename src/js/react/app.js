/**
 * @jsx React.DOM
 */

$(function () {

  var DashItem = React.createClass({displayName: 'DashItem',
    handleClick: function (e) {
      var that = this;
      e.preventDefault();
      $.get(this.props.url, {key: this.props.title}, function (json) {
        that.props.updateImage(json.gif);
      });
    },

    render: function () {
      return (
        React.createElement("a", {className: "dashboard-item", onClick: this.handleClick}, " ", this.props.title, " ")
      );
    }
  });

  var ImageContainer = React.createClass({displayName: 'ImageContainer',
    render: function () {
      return (
        React.createElement("div", {className: "image-container"}, 
          React.createElement(MainImage, {url: this.props.url, loading: this.props.loading}), 
          React.createElement(ImageText, {url: this.props.url, loading: this.props.loading})
        )
      );
    }
  });

  var ImageText = React.createClass({displayName: 'ImageText',
      render: function () {
        var text = this.props.loading ? 'loading...' : this.props.url;

        return (
            React.createElement("h2", null, " ", text, " ")
        );
      }
  });

  var MainImage = React.createClass({displayName: 'MainImage',
    render: function () {
      if (this.props.loading) {
        return (
          React.createElement("div", {id: "loader", className: "spinner"}, 
            React.createElement("div", {className: "double-bounce1"}), 
            React.createElement("div", {className: "double-bounce2"})
          )
        );
      } else {
        return (
          React.createElement("img", {className: "image", src: this.props.url})
        );
      }
    }
  });

  var Dash = React.createClass({displayName: 'Dash',
    render: function () {
      return (
        React.createElement("div", {className: "dashboard-items"}, 
          React.createElement(DashItem, {title: "Random", url: "randomgif", updateImage: this.props.updateImage}), 
          React.createElement(DashItem, {title: "GIF", url: "gif", updateImage: this.props.updateImage}), 
          React.createElement(DashItem, {title: "JPG", url: "jpg", updateImage: this.props.updateImage}), 
          React.createElement(DashItem, {title: "Cat", url: "cat", updateImage: this.props.updateImage}), 
          React.createElement(DashItem, {title: "I", url: "i", updateImage: this.props.updateImage}), 
          React.createElement(DashItem, {title: "You", url: "you", updateImage: this.props.updateImage})
        )
      );
    }
  });

  var App = React.createClass({displayName: 'App',
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
          React.createElement(Dash, {updateImage: this.updateImage})
        );
      } else if (this.state.route === 'image') {
        return (
          React.createElement("div", {className: "image-view"}, 
            React.createElement(Dash, {updateImage: this.updateImage}), 
            React.createElement(ImageContainer, {loading: this.state.loading, url: this.state.url})
          )
        );
      }
    }
  });

  React.render(React.createElement(App, null), document.getElementById('app'));
});
