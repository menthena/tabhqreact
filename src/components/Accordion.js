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

    for (var key in items) {
      categories.push(<Category key={key} onClick={this.handleClick.bind(this, items[key])} visibleCategory={this.state.visibleCategory} category={items[key]} />);
    }

    return (
        <div id="categories" className="Accordion">
          {categories}
        </div>
      );
  }
});

module.exports = Accordion; 

