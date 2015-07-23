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
  }
};

module.exports = Api;
