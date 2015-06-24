'use strict';

describe('UrlComponent', function () {
  var React = require('react/addons');
  var UrlComponent, component;

  beforeEach(function () {
    UrlComponent = require('components/UrlComponent.js');
    component = React.createElement(UrlComponent);
  });

  it('should create a new instance of UrlComponent', function () {
    expect(component).toBeDefined();
  });
});
