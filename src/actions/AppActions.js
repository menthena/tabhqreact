'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  },
  removeItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      index: index
    });
  },
  updateItem: function(index, content) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_ITEM,
      index: index,
      content: content
    });
  }
};

module.exports = AppActions;
