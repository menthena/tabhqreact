'use strict';

var React = require('react/addons');
var SectionMenuItem = require('./SectionMenuItem');

require('styles/Accordion.sass');

var Accordion = React.createClass({

  getInitialState: function() {
    var categoryMap = this.props.items.map(function(i, idx) {
      return {
        open: false,
        title: i.title,
        sections: i.sections
      }
    });

    return {
      categoryMap: categoryMap,
      visibleCategory: null
    }
  },



  render: function () {

    var categories = [];
    var items = this.state.categoryMap;

    for (var key in items) {
      categories.push(<SectionMenuItem key={key} visibleCategory={this.} category={items[key]} />);
    }

    return (
        <div className="Accordion">
          {categories}
        </div>
      );
  }
});

module.exports = Accordion; 

