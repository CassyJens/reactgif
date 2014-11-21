var AppDispatcher = require('../dispatcher/AppDispatcher');
var LoadingConstants = require('../constants/LoadingConstants');

// Loading Actions
module.exports = {

  set: function (isLoading) {
    AppDispatcher.handleViewAction({
      actionType: LoadingConstants.LOADING_SET,
      isLoading: isLoading
    });
  },

  toggle: function (isLoading) {
    AppDispatcher.handleViewAction({
      actionType: LoadingConstants.LOADING_TOGGLE,
      isLoading: isLoading
    });
  }

};
