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

  var ImageContainer = React.createClass({
    render: function () {
      return (
        <div className="image-container">
          <MainImage url={this.props.url} loading={this.props.loading} />
          <ImageText url={this.props.url} loading={this.props.loading} />
        </div>
      );
    }
  });

  var ImageText = React.createClass({
      render: function () {
        var text = this.props.loading ? 'loading...' : this.props.url;

        return (
            <h2> {text} </h2>
        );
      }
  });

  var MainImage = React.createClass({
    render: function () {
      if (this.props.loading) {
        return (
          <div id="loader" className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        );
      } else {
        return (
          <img className="image" src={this.props.url} />
        );
      }
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
