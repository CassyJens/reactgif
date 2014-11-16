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

  var ImageHeader = React.createClass({displayName: 'ImageHeader',
    render: function () {
      return (
        React.createElement("h2", null, " ", this.props.title, " ")
      );
    }
  });

  var ImageFrame = React.createClass({displayName: 'ImageFrame',
    render: function () {
      console.log(this.props.url);
      return (
        React.createElement("img", {class: "image", src: this.props.url})
      );
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
      return {route: '', url: ''};
    },

    updateImage: function (url) {
      var that = this;

      this.setState({route: 'image', url: url, imageTitle: '...loading'});
      new imagesLoaded($('.image'), function () {
        that.setState({imageTitle: url});
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
            React.createElement("div", {className: "image-container"}, 
              React.createElement(ImageHeader, {title: this.state.imageTitle}), 
              React.createElement(ImageFrame, {url: this.state.url})
            )
          )
        )
      }
    }
  });

  React.render(React.createElement(App, null), document.getElementById('app'));
});
