'use strict';

describe('PageWidget', function () {
  var React = require('react/addons');
  var PageWidget, component;

  beforeEach(function () {
    PageWidget = require('components/PageWidget.js');
    component = React.createElement(PageWidget);
  });

  it('should create a new instance of PageWidget', function () {
    expect(component).toBeDefined();
  });
});
