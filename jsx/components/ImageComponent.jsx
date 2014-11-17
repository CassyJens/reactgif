var LoadableImage = require('./LoadableImage');
var ImageTitle = require('./ImageTitle');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="image-container">
        <LoadableImage imgURL={this.props.imgURL} loading={this.props.loading} />
        <ImageTitle imgURL={this.props.imgURL} loading={this.props.loading} />
      </div>
    );
  }
});
