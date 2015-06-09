'use strict';

var React = require('react/addons');

var MenuSections = React.createClass({

  propTypes: {
    category: React.PropTypes.object.isRequired
  },

  render: function () {
    var category = this.props.category;
    var sections = category.sections;
    var visibleCategory = this.props.visibleCategory;

    var inlineStyles = {
      display : visibleCategory && visibleCategory.title === category.title ? 'block' : 'none'
    };

    if (sections.length) {
      return (
        <ul style={ inlineStyles }>
          {sections.map(function(section) {
            return (
              <li>
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

