'use strict';

describe('Accordion', function () {
  var React = require('react/addons');
  var Accordion, component;

  beforeEach(function () {
    Accordion = require('components/Accordion.js');
    component = React.createElement(Accordion);
  });

  it('should create a new instance of Accordion', function () {
    expect(component).toBeDefined();
  });
});
