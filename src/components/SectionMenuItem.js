'use strict';

var React = require('react/addons');


require('styles/SectionMenuItem.sass');

var SectionMenuItem = React.createClass({

  propTypes: {
    category: React.PropTypes.object.isRequired
  },

  render: function () {
    var category = this.props.category;
    return (
        <div onClick={this.props.onClick}>
          <h3>{category.title}</h3>
          {this.props.visibleCategory && this.props.visibleCategory.title === category.title ? 'Reactive' : '' }
        </div>
      );
  }
});

module.exports = SectionMenuItem; 

