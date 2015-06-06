'use strict';

var React = require('react/addons');
var SectionMenuItem = require('./SectionMenuItem');

require('styles/Accordion.sass');

var Accordion = React.createClass({

  getInitialState: function() {
    return {
      visibleCategory: null
    };
  },

  handleClick: function(category) {
    this.setState({
      visibleCategory: category
    });
  },

  render: function () {

    var categories = [];
    var items = this.props.items;

    for (var key in items) {
      categories.push(<SectionMenuItem key={key} onClick={this.handleClick.bind(this, items[key])} visibleCategory={this.state.visibleCategory} category={items[key]} />);
    }

    return (
        <div className="Accordion">
          {categories}
        </div>
      );
  }
});

module.exports = Accordion; 

