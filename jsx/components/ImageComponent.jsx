var LoadableImage = require('./LoadableImage');
var ImageTitle = require('./ImageTitle');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="image-container">
        <LoadableImage imgURL={this.props.imgURL} />
        <ImageTitle imgURL={this.props.imgURL} />
      </div>
    );
  }
});
