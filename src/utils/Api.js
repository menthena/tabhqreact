'use strict';

var axios = require('axios');
var AppActions = require('../actions/AppActions');
var ServerActions = require('../actions/ServerActions');
var baseApiUrl = 'http://localhost:3000/';

var Api = {

  getCategories: function() {
    return axios.get(baseApiUrl + 'categories').then(function(response) {
      ServerActions.receiveData(response.data.data);
    });
  },

  updateSection: function(index, data) {
    // TODO: Save instead of GET all categories
    return axios.get(baseApiUrl + 'categories').then(function(response) {
      // Mocking success
      ServerActions.receiveCategory(index, data);
    });
  },

  sortCategorySections: function(categoryID, sections) {
    // TODO: Save instead of GET all categories
    return axios.get(baseApiUrl + 'categories').then(function(response) {
      // Mocking success
      ServerActions.receiveSortedCategorySections(categoryID, sections);
    });
  },

  sortSectionItems: function(sectionID, items) {
    // TODO: Save instead of GET all categories
    return axios.get(baseApiUrl + 'categories').then(function(response) {
      // Mocking success
      ServerActions.receiveSortedSectionItems(sectionID, items);
    });
  },

  sortCategories: function(categories) {
    // TODO: Save instead of GET all categories
    return axios.get(baseApiUrl + 'categories').then(function(response) {
      // Mocking success
      ServerActions.receiveSortedCategories(categories);
    });
  }
};

module.exports = Api;
