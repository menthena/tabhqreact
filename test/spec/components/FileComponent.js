'use strict';

describe('FileComponent', function () {
  var React = require('react/addons');
  var FileComponent, component;

  beforeEach(function () {
    FileComponent = require('components/FileComponent.js');
    component = React.createElement(FileComponent);
  });

  it('should create a new instance of FileComponent', function () {
    expect(component).toBeDefined();
  });
});
