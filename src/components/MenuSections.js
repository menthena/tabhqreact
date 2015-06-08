'use strict';

var React = require('react/addons');

var MenuSections = React.createClass({

  propTypes: {
    category: React.PropTypes.object.isRequired
  },

  render: function () {
    var category = this.props.category;
    var sections = category.sections;

    var visibleSections = {
      display: 'block'
    };

    var invisibleSections = {
      display: 'none'
    };

    if (sections.length) {
      return (
        <ul style={ this.props.visibleCategory && this.props.visibleCategory.title === category.title ? visibleSections : invisibleSections }>
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
      )
    }
  }
});

module.exports = MenuSections; 

