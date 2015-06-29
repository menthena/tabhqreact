'use strict';

describe('ListComponent', function () {
  var React = require('react/addons');
  var ListComponent, component;

  beforeEach(function () {
    ListComponent = require('components/ListComponent.js');
    component = React.createElement(ListComponent);
  });

  it('should create a new instance of ListComponent', function () {
    expect(component).toBeDefined();
  });
});
