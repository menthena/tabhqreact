'use strict';

var React = require('react/addons');
var ContentSection = require('./ContentSection');
var Header = require('./Header');

require('styles/Content.sass');

var Content = React.createClass({

  onScroll: function() {
    var scrollTop = window.scrollY;
    var closestSection;

    for (var contentsection in this.refs ) {
      if (scrollTop >= this.refs[contentsection].getOffsetTop()) {
        closestSection = this.refs[contentsection];
      }
    }

    if (closestSection) {
      // console.log(scrollTop, closestSection.getOffsetTop());
      this.props.onSectionScroll(closestSection.props.section.title);
    }

  },

  render: function () {

    var sections = [];
    var items = this.props.sections;

    for (var key in items) {
      sections.push(<ContentSection key={key} section={items[key]} ref={'contentsection_' + key} />);
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

