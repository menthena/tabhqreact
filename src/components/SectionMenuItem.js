'use strict';

var React = require('react/addons');


require('styles/SectionMenuItem.sass');

var SectionMenuItem = React.createClass({

  getInitialState: function() {
    return {
      open: null
    };
  },

  propTypes: {
    category: React.PropTypes.object.isRequired
  },

  handleClick: function() {
    var open = !this.props.category.open;
    this.setState({
      open: open
    });
    this.props.category.open = open;

    console.log(this.props.categories);
    
    for (var i = 0; i < this.props.categories.length; i++) {
      this.props.categories[i].open = false;
    }

  },

  render: function () {
    var category = this.props.category;

    return (
        <div onClick={this.handleClick}>
          <h3>{category.title}</h3>
          { this.state.open === true ? 'A' : null }
        </div>
      );
  }
});

module.exports = SectionMenuItem; 

