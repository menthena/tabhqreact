'use strict';

var React = require('react/addons');

var MenuSections = React.createClass({

  propTypes: {
    category: React.PropTypes.object.isRequired
  },

  render: function () {
    var category = this.props.category;
    var sections = category.sections;
    var isVisible = this.props.isVisible;
    var currentSection = this.props.currentSection;

    var inlineStyles = {
      display : isVisible ? 'block' : 'none'
    };

    if (sections.length) {
      return (
        <ul style={ inlineStyles }>
          {sections.map(function(section) {

            var currentSectionStyle = {
              fontWeight : currentSection === section.title ? 'bold' : 'normal'
            };

            return (
              <li key={ category.title + section.title } style={ currentSectionStyle }>
                {section.title}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
});

module.exports = MenuSections; 

