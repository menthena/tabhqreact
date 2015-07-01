'use strict';

var React = require('react/addons');
var DragMixin = require('../mixins/DragMixin');

var MenuSections = React.createClass({
  mixins: [DragMixin],

  componentDidMount() {
    this.loadDraggableData(this.state.sections);
  },

  getInitialState() {
    return {
      sections: this.props.category.sections
    };
  },

  render: function () {
    var category = this.props.category;
    var sections = this.state.sections;
    var isVisible = this.props.isVisible;
    var currentSection = this.props.currentSection;

    var inlineStyles = {
      display : isVisible ? 'block' : 'none'
    };

    if (sections.length) {
      return (
        <div onDragOver={this.dragOver}>
          <ul style={ inlineStyles }>
            {sections.map(function(section, index) {

              var currentSectionStyle = {
                fontWeight : currentSection === section.title ? 'bold' : 'normal'
              };

              return (
                <li key={ category.title + section.title } data-id={index} style={ currentSectionStyle } data-droppable="menu-sections" draggable="true" onDragEnd={this.dragEnd} onDragStart={this.dragStart}>
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

