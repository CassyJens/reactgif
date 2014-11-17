module.exports = React.createClass({
    render: function () {
      var text = this.props.loading ? 'loading...' : this.props.imgURL;

      return (
          <h2> {text} </h2>
      );
    }
});
