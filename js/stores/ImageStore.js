var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ImageConstants = require('../constants/ImageConstants');
var ImageStore = require('../stores/ImageStore');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _images = [];

function create (imgURL) {
  _images.push(imgURL);
}

function destroy () {
  if (_images.length > 0) {
    images.pop();
  } else {
    return {};
  }
}

ImageStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _images;
  },

  getLast: function () {
    return _images[_images.length - 1];
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (payload) {
  var action = payload.action;
  var imgURL;
  console.log(action);

  switch (action.actionType) {
    case ImageConstants.IMAGE_CREATE:
      imgURL = action.imgURL.trim();
      if (imgURL !== '') {
        create(imgURL);
      }
      break;

    case ImageConstants.IMAGE_DESTROY:
      destroy();
      break;

    case ImageConstants.IMAGE_DESTROY_COMPLETED:
      destroyCompleted();
      break;

    default:
      return true;
  }

  ImageStore.emitChange();

  return true;
});

module.exports = ImageStore;
