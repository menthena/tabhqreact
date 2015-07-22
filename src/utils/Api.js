'use strict';

var axios = require('axios');

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username);
}

var api = {
  getGithubInfo: function(username) {
    return axios.all([getUserInfo(username)])
      .then(function(arr) {

      });
  }
};
