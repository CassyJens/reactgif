var AppDispatcher = require('../dispatcher/AppDispatcher');
var KeyConstants = require('../constants/KeyConstants');

// KeyActions
module.exports = {

  create: function (key) {
    AppDispatcher.handleViewAction({
      actionType: KeyConstants.KEY_CREATE,
      key: key
    });
  }

};
