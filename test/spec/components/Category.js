'use strict';

describe('Category', function () {
  var React = require('react/addons');
  var Category, component;

  beforeEach(function () {
    Category = require('components/Category.js');
    component = React.createElement(Category);
  });

  it('should create a new instance of Category', function () {
    expect(component).toBeDefined();
  });
});
