'use strict';

var React = require('react/addons');
var Category = require('./Category');

var Accordion = React.createClass({

  getInitialState: function() {
    return {
      visibleCategory: null
    };
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

    for (var key in items) {
      categories.push(<Category key={key} category={items[key]} currentSection={currentSection} />);
    }

    return (
        <div id="categories" className="Accordion">
          {categories}
        </div>
      );
  }
});

module.exports = Accordion; 

