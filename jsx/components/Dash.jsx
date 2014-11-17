var DashItem = require('./DashItem');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="dashboard-items">
        <DashItem title="Random" url="image/randomgif" />
        <DashItem title="GIF" url="image/gif" />
        <DashItem title="JPG" url="image/jpg" />
        <DashItem title="Cat" url="image/cat" />
        <DashItem title="I" url="image/i" />
        <DashItem title="You" url="image/you" />
      </div>
    );
  }
});
