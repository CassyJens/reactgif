var MainImage = require('./MainImage');
var ImageText = require('./ImageText');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="image-container">
        <MainImage url={this.props.url} loading={this.props.loading} />
        <ImageText url={this.props.url} loading={this.props.loading} />
      </div>
    );
  }
});
