'use strict';

describe('PageSections', function () {
  var React = require('react/addons');
  var PageSections, component;

  beforeEach(function () {
    PageSections = require('components/PageSections.js');
    component = React.createElement(PageSections);
  });

  it('should create a new instance of PageSections', function () {
    expect(component).toBeDefined();
  });
});
