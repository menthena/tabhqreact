'use strict';

var React = require('react/addons');
var ContentSection = require('./ContentSection');
var Header = require('./Header');

require('styles/Content.sass');

var Content = React.createClass({

  render: function () {

    var sections = [];
    var items = this.props.sections;

    for (var key in items) {
      sections.push(<ContentSection key={key} section={items[key]} />);
    }

    return (
        <div id="content">
          <Header/>
          {sections}
        </div>
      );
  }
});

module.exports = Content; 

