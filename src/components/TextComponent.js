'use strict';

var React = require('react/addons');
var EditableDiv = require('react-wysiwyg-editor');


require('styles/TextComponent.sass');

var TextComponent = React.createClass({

  handleContentChange: function(e) {
    this.setState({copy: e.target.value});
  },

  toggleEditableDiv: function() {
    this.setState({
      editableDivVisible: this.state.editableDivVisible ? false : true
    });
  },

  getInitialState: function() {
    return {
      editableDivVisible : false,
      copy: this.props.copy
    };
  },

  render: function () {
    var editorStyle = {
      overflow: 'auto',
      height: 'auto'
    };
    var editableDivStyle = {
      display: this.state.editableDivVisible ? 'block' : 'none'
    };
    var copyStyles = {
      display: this.state.editableDivVisible ? 'none' : 'block'
    };

    return (
        <div>
          <div style={editableDivStyle}>
            <EditableDiv style={editorStyle} content={this.state.copy} onChange={this.handleContentChange} />
            <div className='text-right downloadButtons'>
              <button type='submit' className='btn btn-default' onClick={this.toggleEditableDiv}>Cancel</button>
              <button type='submit' className='btn btn-primary btn-orange' onClick={this.toggleEditableDiv}>Update</button>
            </div>
          </div>
          <div style={copyStyles} onClick={this.toggleEditableDiv} className='copy' dangerouslySetInnerHTML={{__html: this.state.copy}} />
        </div>
      );
  }
});

module.exports = TextComponent; 

