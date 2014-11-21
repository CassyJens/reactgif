var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var KeyConstants = require('../constants/KeyConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _key = '';

function create (key) {
  _key = key;
}

// thinks that can be called on KeyStore
var KeyStore = assign({}, EventEmitter.prototype, {
  getKey: function() {
    return _key;
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

// things that can be called on the KeyActions
AppDispatcher.register(function (payload) {
  var action = payload.action;
  var key;

  switch (action.actionType) {
    case KeyConstants.KEY_CREATE:
      key = action.key.trim();
      if (key !== '') {
        create(key);
      }
      break;

    default:
      return true;
  }

  KeyStore.emitChange();

  return true;
});

module.exports = KeyStore;
