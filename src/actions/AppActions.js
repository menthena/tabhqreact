'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var Api = require('../utils/Api');

// Test comment
var AppActions = {

  getCategories: function(data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_CATEGORIES,
      data: data
    });
    Api.getCategories();
  },

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
  },

  updateSection: function(index, data) {
    Api.updateSection(index, data);
  },

  sortSectionItems: function(sectionID, items) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SORT_SECTION_ITEMS,
      sectionID: sectionID,
      items: items
    });
    Api.sortSectionItems(sectionID, items);
  },

  sortCategorySections: function(categoryID, sections) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SORT_CATEGORY_SECTIONS,
      categoryID: categoryID,
      sections: sections
    });
    Api.sortCategorySections(categoryID, sections);
  },

  sortCategories: function(categories) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SORT_CATEGORIES,
      categories: categories
    });
    Api.sortCategories(categories);
  }
};

module.exports = AppActions;
