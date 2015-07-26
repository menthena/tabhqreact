'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppStore = require('../stores/AppStore');
var AppConstants = require('../constants/AppConstants');

var ServerActions = {
  receiveData: function(data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_CATEGORIES,
      data: data
    });
  },
  receiveCategory(index, data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_SECTION,
      index: index,
      data: data
    });
  },

  receiveSortedSectionItems: function(sectionID, items) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SORT_SECTION_ITEMS,
      sectionID: sectionID,
      items: items
    });
  },

  receiveSortedCategorySections: function(categoryID, sections) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SORT_CATEGORY_SECTIONS,
      categoryID: categoryID,
      sections: sections
    });
  },

  receiveSortedCategories: function(categories) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SORT_CATEGORIES,
      categories: categories
    });
  }
};

module.exports = ServerActions;
