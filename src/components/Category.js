'use strict';

var React = require('react/addons');
var MenuSections = require('./MenuSections');

var Category = React.createClass({

  render: function () {
    var category = this.props.category;

    return (
        <div onClick={this.props.onClick}>
          <h3>{category.title}</h3>
          <MenuSections category={category} visibleCategory={this.props.visibleCategory} handleMenuSectionClick={this.props.handleMenuSectionClick} activeMenuSection={this.props.activeMenuSection} />
        </div>
      );
  }
});

module.exports = Category; 

