'use strict';

var React = require('react/addons');


require('styles/TextComponent.sass');

var TextComponent = React.createClass({

  render: function () {
    var copy = this.props.copy;

    return (
        <div className='copy' dangerouslySetInnerHTML={{__html: copy}} />
      );
  }
});

module.exports = TextComponent; 

