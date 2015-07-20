'use strict';

var React = require('react/addons');
var DragMixin = require('../mixins/DragMixin');

var MenuSections = React.createClass({
  mixins: [DragMixin],

  setDraggableData: function(sections) {
    this.props.updateSections(this.props.category, sections);
  },

  render: function () {
    var category = this.props.category;
    var isVisible = this.props.isVisible;
    var currentSection = this.props.currentSection;

    this.loadDraggableData(this.props.category.sections);

    var inlineStyles = {
      display : isVisible ? 'block' : 'none'
    };

    if (category.sections.length) {
      return (
        <div onDragOver={this.dragOver}>
          <ul style={ inlineStyles }>
            {category.sections.map(function(section, index) {

              var currentSectionStyle = {
                fontWeight : currentSection === section.title ? 'bold' : 'normal'
              };

              return (
                <li key={ category.title + section.title } data-order={section.order} style={ currentSectionStyle } data-droppable="menu-sections" draggable="true" onDragEnd={this.dragEnd} onDragStart={this.dragStart}>
                  {section.title}
                </li>
              );
            }.bind(this))}
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
});

module.exports = MenuSections; 

