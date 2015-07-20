'use strict';

var AppDispatcher = require('../dispatcher/TabhqreactAppDispatcher');

var AppActions = {
  updateItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: 'UPDATE_ITEM',
      item: item
    });
  }
};

module.exports = AppActions;
