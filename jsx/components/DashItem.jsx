module.exports = React.createClass({
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
