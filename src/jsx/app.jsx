/**
 * @jsx React.DOM
 */

$(function () {

  var DashItem = React.createClass({
    handleClick: function (e) {
      var that = this;

      e.preventDefault();
      $.get(this.props.url, {key: this.props.title}, function (json) {
        that.props.updateImage(json.gif);
      });
    },

    render: function () {
      return (
        <a className="dashboard-item" onClick={this.handleClick}> {this.props.title} </a>
      );
    }
  });

  var ImageHeader = React.createClass({
    render: function () {
      return (
        <h2> {this.props.title} </h2>
      );
    }
  });

  var ImageFrame = React.createClass({
    render: function () {
      console.log(this.props.url);
      return (
        <img class="image" src={this.props.url} />
      );
    }
  });

  var Dash = React.createClass({
    render: function () {
      return (
        <div className="dashboard-items">
          <DashItem title="Random" url="randomgif" updateImage={this.props.updateImage} />
          <DashItem title="GIF" url="gif" updateImage={this.props.updateImage} />
          <DashItem title="JPG" url="jpg" updateImage={this.props.updateImage} />
          <DashItem title="Cat" url="cat" updateImage={this.props.updateImage} />
          <DashItem title="I" url="i" updateImage={this.props.updateImage}/>
          <DashItem title="You" url="you" updateImage={this.props.updateImage}/>
        </div>
      );
    }
  });

  var App = React.createClass({
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
          <Dash updateImage={this.updateImage} />
        );
      } else if (this.state.route === 'image') {
        return (
          <div className="image-view">
            <Dash updateImage={this.updateImage} />
            <div className="image-container">
              <ImageHeader title={this.state.imageTitle} />
              <ImageFrame url={this.state.url} />
            </div>
          </div>
        )
      }
    }
  });

  React.render(<App />, document.getElementById('app'));
});
