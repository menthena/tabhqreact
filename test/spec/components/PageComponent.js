'use strict';

describe('PageComponent', function () {
  var React = require('react/addons');
  var PageComponent, component;

  beforeEach(function () {
    PageComponent = require('components/PageComponent.js');
    component = React.createElement(PageComponent);
  });

  it('should create a new instance of PageComponent', function () {
    expect(component).toBeDefined();
  });
});
