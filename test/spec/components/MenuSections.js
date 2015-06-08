'use strict';

describe('MenuSections', function () {
  var React = require('react/addons');
  var MenuSections, component;

  beforeEach(function () {
    MenuSections = require('components/MenuSections.js');
    component = React.createElement(MenuSections);
  });

  it('should create a new instance of MenuSections', function () {
    expect(component).toBeDefined();
  });
});
