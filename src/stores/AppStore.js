'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Api = require('../utils/Api');
var AppConstants = require('../constants/AppConstants');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _categories = [];

function _updateItem(index, content) {
    //sections[index].title = content;
}

var AppStore = assign(EventEmitter.prototype, {

  loadCategories(data) {
    _categories = data;
  },

  sortCategorySections(categoryID, sections) {
    _.each(_categories, function(category) {
      if (category.id === categoryID) {
        category.sections = sections;
      }
    });
  },

  sortCategories(categories) {
    _categories = categories;
  },

  sortSectionItems(sectionID, data) {
    _.each(_categories, function(category) {
      _.each(category.sections, function(section) {
        if (section.id === sectionID) {
          category.data = data;
        }
      });
    });
  },

  updateSection(index, data){
    _.each(_categories, function(category) {
      var newSection = _.find(category.sections, { id: index });
      if (newSection) {
        _.each(data, function(item, itemIndex) {
          newSection[itemIndex] = item;
        });
      }
    });
  },

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
    case AppConstants.UPDATE_SECTION:
      AppStore.updateSection(action.index, action.data);
      AppStore.emitChange();
      break;
    case AppConstants.SORT_CATEGORY_SECTIONS:
      AppStore.sortCategorySections(action.categoryID, action.sections);
      AppStore.emitChange();
      break;
    case AppConstants.SORT_SECTION_ITEMS:
      AppStore.sortSectionItems(action.sectionID, action.items);
      AppStore.emitChange();
      break;
    case AppConstants.SORT_CATEGORIES:
      AppStore.sortCategories(action.categories);
      AppStore.emitChange();
      break;
    case AppConstants.GET_CATEGORIES:
      AppStore.loadCategories(action.data);
      AppStore.emitChange();
      break;

    default:
      return true;
  }
});


module.exports = AppStore;
