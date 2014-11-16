module.exports = React.createClass({
    render: function () {
      var text = this.props.loading ? 'loading...' : this.props.url;

      return (
          <h2> {text} </h2>
      );
    }
});
