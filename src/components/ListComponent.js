'use strict';

var React = require('react/addons');
var FileComponent = require('./FileComponent');
var UrlComponent = require('./UrlComponent');
var update = React.addons.update;

require('styles/ListComponent.sass');

var placeholder = document.createElement("div");
placeholder.className = "placeholder";

var ListComponent = React.createClass({

  getInitialState: function() {
    return {
      files: this.props.data,
      urls: this.props.data
    };
  },

  addLink: function() {
    //var update = React.addons.update;
    var elem = {
      'title': 'IT Guide',
      'extensions': 'PDF',
      'url': 'http://google.com',
      'size': 2077912,
      'updated_at': '2014-12-10T13:48:35.808Z'
    };
    //console.log(this.props);
    this.setState({
      files: update(this.state.files, { $push: [elem] })
    });
  },

  removeLink(file) {
    var index = this.state.files.indexOf(file);
    this.setState({
      files: update(this.state.files, { $splice: [[index, 1]] })
    });
  },

  dragStart: function(e) {
    this.dragged = e.currentTarget.parentNode.parentNode.parentNode;
    e.dataTransfer.effectAllowed = 'move';

    // // Firefox requires calling dataTransfer.setData
    // // for the drag to properly work
    e.dataTransfer.setData('text/html', this.dragged);
  },
  
  dragEnd: function(e) {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(placeholder);

    // Update state
    var data = this.state.files;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if (from < to) { 
      to--;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  },
  
  dragOver: function(e) {
    e.preventDefault();
    this.dragged.style.display = 'none';
    if (e.target.className === 'placeholder') {
      return;
    }
    this.over = e.target.parentNode;
    e.target.parentNode.insertBefore(placeholder, e.target);
  },

  render: function () {
    var files = this.state.files || [];

    var urls = this.state.urls || [];
    var isAdmin = this.props.isAdmin;
    var addLinkButton = '';
    if (isAdmin) {
      addLinkButton = <button className="btn btn-default" onClick={this.addLink}>Add link</button>
    }

    return (
        <div className="files" onDragOver={this.dragOver}>
          {files.map(function(file) {
            return (<FileComponent dragStart={this.dragStart} dragEnd={this.dragEnd} file={file} onClick={this.removeLink} isAdmin={isAdmin}></FileComponent>);
          }.bind(this))}

          {urls.map(function() {
            return (<UrlComponent isAdmin={isAdmin}></UrlComponent>);
          }.bind(this))}

          {addLinkButton}

        </div>
      );
  }
});

module.exports = ListComponent; 

