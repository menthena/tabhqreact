'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _categories = {};

function loadCategories(data) {
  _categories = data.data;
}

function _updateItem(index, content) {
    //sections[index].title = content;
}

var AppStore = assign(EventEmitter.prototype, {
  getCategories: function() {
    return _categories;
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

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.RECEIVE_DATA:
      console.log(action.data);
      loadCategories(action.data);
      break;

    default:
      return true;
  }

  AppStore.emitChange();

  return true;

});

module.exports = AppStore;
