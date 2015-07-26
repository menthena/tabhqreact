'use strict';

var React = require('react/addons');
var Editor = require('react-medium-editor');
var AppActions = require('../actions/AppActions');

require('styles/TextComponent.sass');
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

var TextComponent = React.createClass({

  handleContentChange: function(content) {
    AppActions.updateSection(this.props.index, {copy: content});
  },

  getInitialState: function() {
    return {
      copy: this.props.copy
    };
  },

  render: function () {
    return (
        <div className="copy">
         <Editor index={this.props.index} text={this.state.copy} onChange={this.handleContentChange} options={{buttons: ['bold', 'italic', 'underline', 'anchor', 'header2']}}/>
        </div>
      );
  }
});

module.exports = TextComponent;
