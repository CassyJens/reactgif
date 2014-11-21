var LoadingStore = require('../stores/LoadingStore');

var getLoadingState = function () {
  return {
    isLoading: LoadingStore.getLoading()
  };
}

module.exports = React.createClass({
  render: function () {
    return (
      <div class="loading">
        { this.state.isLoading ? <div className="loading-screen"> Loading... </div> : null }
      </div>
    );
  },

  getInitialState: function () {
    return getLoadingState();
  },

  componentDidMount: function() {
    LoadingStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LoadingStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState(getLoadingState());
  }
});
