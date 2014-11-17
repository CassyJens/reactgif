// var AppDispatcher = require('../dispatcher/AppDispatcher');
// var EventEmitter = require('events').EventEmitter;
// var ImageConstants = require('../constants/ImageConstants');
// var assign = require('object-assign');
//
// var CHANGE_EVENT = 'change';
//
// var _images = {};
//
// function create (url) {
//   var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
//
//   _images[id] = {
//     id: id,
//     url: url
//   };
// }
//
// function destroy (id) {
//   delete _images[id];
// }
//
// module.exports = assign({}, EventEmitter.prototype, {
//   getAll: function() {
//     return _images;
//   },
//
//   emitChange: function() {
//     this.emit(CHANGE_EVENT);
//   },
//
//   addChangeListener: function(callback) {
//     this.on(CHANGE_EVENT, callback);
//   },
//
//   removeChangeListener: function(callback) {
//     this.removeListener(CHANGE_EVENT, callback);
//   }
// });
//
// AppDispatcher.register(function (payload) {
//   var action = payload.action;
//   var url;
//
//   switch (action.actionType) {
//     case ImageConstants.IMAGE_CREATE:
//       url = action.url.trim();
//       if (url !== '') {
//         create(url);
//       }
//       break;
//
//     case ImageConstants.IMAGE_DESTROY:
//       destroy(action.id);
//       break;
//
//     case ImageConstants.IMAGE_DESTROY_COMPLETED:
//       destroyCompleted();
//       break;
//
//     default:
//       return true;
//   }
//
//   ImageStore.emitChange();
//
//   return true;
// });
//
// module.exports = ImageStore;
