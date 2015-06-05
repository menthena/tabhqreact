'use strict';

describe('TabhqreactApp', function () {
  var React = require('react/addons');
  var TabhqreactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TabhqreactApp = require('components/TabhqreactApp.js');
    component = React.createElement(TabhqreactApp);
  });

  it('should create a new instance of TabhqreactApp', function () {
    expect(component).toBeDefined();
  });
});
