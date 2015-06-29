'use strict';

describe('TextComponent', function () {
  var React = require('react/addons');
  var TextComponent, component;

  beforeEach(function () {
    TextComponent = require('components/TextComponent.js');
    component = React.createElement(TextComponent);
  });

  it('should create a new instance of TextComponent', function () {
    expect(component).toBeDefined();
  });
});
