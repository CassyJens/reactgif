module.exports = React.createClass({
  render: function () {
    return (
      <a className="dashboard-item" href={"#" + this.props.url}> {this.props.title} </a>
    );
  }
});
