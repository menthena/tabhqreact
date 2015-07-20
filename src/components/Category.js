'use strict';

var React = require('react/addons');
var MenuSections = require('./MenuSections');

var Category = React.createClass({

  getInitialState: function() {
    return {
      isVisible: false
    };
  },

  handleClick: function() {
    if (!this.state.isVisible) {
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  },

  render: function () {
    var category = this.props.category;
    var isVisible = this.state.isVisible;
    var cx = React.addons.classSet;
    var currentSection = this.props.currentSection;
    var classes = cx({
      'has-sections' : category.sections.length,
      'open' : isVisible
    });

    return (
        <div data-order={category.order} data-droppable="category" draggable="true" onDragStart={this.props.dragStart} onDragEnd={this.props.dragEnd} onMouseEnter={this.props.dragHover} style={{'pointer-events': 'all'}}>
          <h3 className={ classes } onClick={this.handleClick}>{category.title}</h3>
          <MenuSections updateSections={this.props.updateSections} category={category} isVisible={this.state.isVisible} currentSection={currentSection} />
        </div>
      );
  }
});

module.exports = Category; 

