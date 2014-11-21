var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var LoadingConstants = require('../constants/LoadingConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _isLoading = false;

function setLoading (isLoading) {
  _isLoading = isLoading;
}

function toggleLoading () {
  _isLoading = !_isLoading;
}

// Things that can be called on the LoadingStore
var LoadingStore = assign({}, EventEmitter.prototype, {
  getLoading: function() {
    return _isLoading;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Things that can be called on LoadingActions
AppDispatcher.register(function (payload) {
  var action = payload.action;
  var isLoading = action.isLoading;

  switch (action.actionType) {
    case LoadingConstants.LOADING_SET:
      setLoading(isLoading);
      break;

    case LoadingConstants.LOADING_TOGGLE:
      toggleLoading();
      break;

    default:
      return true;
  }

  LoadingStore.emitChange();

  return true;
});

module.exports = LoadingStore;
