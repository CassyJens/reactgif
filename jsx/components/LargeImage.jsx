module.exports = React.createClass({
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
