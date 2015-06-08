'use strict';

describe('MenuSection', function () {
  var React = require('react/addons');
  var MenuSection, component;

  beforeEach(function () {
    MenuSection = require('components/MenuSection.js');
    component = React.createElement(MenuSection);
  });

  it('should create a new instance of MenuSection', function () {
    expect(component).toBeDefined();
  });
});
