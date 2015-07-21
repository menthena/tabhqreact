'use strict';

var React = require('react/addons');
var Category = require('./Category');
var DragMixin = require('../mixins/DragMixin');

var Accordion = React.createClass({
  mixins: [DragMixin],

  componentDidMount() {
    this.loadDraggableData(this.props.categories);
  },

  getInitialState: function() {
    return {
      visibleCategory: null,
      activeMenuSection: {}
    };
  },

  setDraggableData: function(categories) {
    this.props.updateCategories(categories);
  },

  handleClick: function(category) {
    if (this.state.visibleCategory !== category) {
      this.setState({
        visibleCategory: category
      });
    } else {
      this.setState({
        visibleCategory: null
      });
    }
  },

  render: function () {

    var categories = [];
    var items = this.props.categories;
    var currentSection = this.props.currentSection;

    items.map(function(item) {
      categories.push(<Category key={item.id} category={item} updateSections={this.props.updateSections} currentSection={currentSection} dragEnd={this.dragEnd} dragStart={this.dragStart} dragHover={this.dragHover} />);
    }.bind(this));

    return (
        <div id="categories" className="Accordion" onDragOver={this.dragOver}>
          {categories}
        </div>
      );
  }
});

module.exports = Accordion;
