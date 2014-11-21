var AppDispatcher = require('../dispatcher/AppDispatcher');
var ImageConstants = require('../constants/ImageConstants');

// ImageActions
module.exports = {

  create: function (imgURL) {
    AppDispatcher.handleViewAction({
      actionType: ImageConstants.IMAGE_CREATE,
      imgURL: imgURL
    });
  },

  destroy: function (id) {
    AppDispatcher.handleViewAction({
      actionType: ImageConstants.IMAGE_DESTROY,
      id: id
    });
  },

  destroyCompleted: function() {
    AppDispatcher.handleViewAction({
      actionType: ImageConstants.IMAGE_DESTROY_COMPLETED
    });
  }

}
