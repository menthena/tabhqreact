'use strict';

var React = require('react/addons');
var TextComponent = require('./TextComponent');
var ListComponent = require('./ListComponent');

require('styles/PageComponent.sass');

var PageComponent = React.createClass({

  render: function () {
    var copy = this.props.copy;
    var files = this.props.data;
    var isAdmin = this.props.isAdmin;

    return (
        <div>
          <TextComponent isAdmin={isAdmin} copy={copy}></TextComponent>
          <ListComponent isAdmin={isAdmin} data={files}></ListComponent>
        </div>
      );
  }
});

module.exports = PageComponent; 

