'use strict';

var React = require('react/addons');
var MenuSections = require('./MenuSections');

var Category = React.createClass({

  render: function () {
    var category = this.props.category;
    var visibleCategory = this.props.visibleCategory;
    var cx = React.addons.classSet;
    var classes = cx({
      'has-sections' : category.sections.length,
      'open' : visibleCategory && visibleCategory.title === category.title
    });

    return (
        <div onClick={this.props.onClick}>
          <h3 className={ classes }>{category.title}</h3>
          <MenuSections category={category} visibleCategory={visibleCategory} />
        </div>
      );
  }
});

module.exports = Category; 

