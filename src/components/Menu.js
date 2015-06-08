'use strict';

var React = require('react/addons');
var Accordion = require('./Accordion');

require('styles/Menu.sass');

var Menu = React.createClass({

  render: function () {
    var categories = this.props.categories;
    
    return (
        <div id='menu'>
          <div id='menu-inner'>
            <div id="logo">
              <img alt="Logo" src="../images/logo.gif"/>
              <h3>Resource centre</h3>
              <h4>Beta v0.1</h4>
            </div>
            <div className='scroll'>
              <Accordion categories={categories}/>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = Menu; 

