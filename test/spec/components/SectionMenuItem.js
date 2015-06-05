'use strict';

describe('SectionMenuItem', function () {
  var React = require('react/addons');
  var SectionMenuItem, component;

  beforeEach(function () {
    SectionMenuItem = require('components/SectionMenuItem.js');
    component = React.createElement(SectionMenuItem);
  });

  it('should create a new instance of SectionMenuItem', function () {
    expect(component).toBeDefined();
  });
});
