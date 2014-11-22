var LoadingStore = require('../stores/LoadingStore');

var getLoadingState = function () {
  return {
    isLoading: LoadingStore.getLoading()
  };
}

module.exports = React.createClass({
  render: function () {
    return (
      <section id="loading">
        { this.state.isLoading
            ? <div>
                <div className="loading-background"></div>
                <div id="loader" className="spinner">
                  <div className="double-bounce1"> </div>
                  <div className="double-bounce2"> </div>
                </div>
              </div>
            : null
        }
      </section>
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
