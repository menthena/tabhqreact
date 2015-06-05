'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var TabhqreactAppDispatcher = require('../dispatcher/TabhqreactAppDispatcher');

var CategoryStore = assign({}, EventEmitter.prototype, {

});

CategoryStore.dispatchToken = TabhqreactAppDispatcher.register(function(action) {

  switch(action.type) {
    default:
  }

});

module.exports = CategoryStore; 
