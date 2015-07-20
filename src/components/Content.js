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
      this.props.onSectionScroll(closestSection.props.section.title);
    }

  },

  render: function () {

    var contentSections = [];
    var categories = this.props.categories;
    var isAdmin = this.props.isAdmin;
    var sections;


    for (var id in categories) {
      for (var key in categories[id].sections) {
        sections = categories[id].sections;
        contentSections.push(<ContentSection isAdmin={isAdmin} key={id + key + sections[key]} section={sections[key]} ref={'contentsection_' + key} />);
      }
    }

    return (
        <div id="content">
          <Header/>
          {contentSections}
        </div>
      );
  }
});

module.exports = Content; 

