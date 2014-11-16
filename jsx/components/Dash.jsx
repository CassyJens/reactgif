var DashItem = require('./DashItem');

module.exports = React.createClass({
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
