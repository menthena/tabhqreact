'use strict';

var React = require('react/addons');
var Category = require('./Category');

var Accordion = React.createClass({

  getInitialState: function() {
    return {
      visibleCategory: {},
      activeMenuSection: {}
    };
  },

  handleMenuSectionClick: function(section, event) {
    event.stopPropagation();
    this.setState({
      activeMenuSection: section
    });
  },

  handleClick: function(category) {
    if (this.state.visibleCategory !== category) {
      this.setState({
        visibleCategory: category
      });
    } else {
      this.setState({
        visibleCategory: {}
      });
    }
  },

  render: function () {

    var categories = [];
    var items = this.props.categories;

    for (var key in items) {
      categories.push(<Category key={key} onClick={this.handleClick.bind(this, items[key])} handleMenuSectionClick={this.handleMenuSectionClick} visibleCategory={this.state.visibleCategory} activeMenuSection={this.state.activeMenuSection} category={items[key]} />);
    }

    return (
        <div className="Accordion">
          {categories}
        </div>
      );
  }
});

module.exports = Accordion; 

