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
      data: this.props.data
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
    this.setState({
      data: update(this.state.data, { $push: [elem] })
    });
  },

  removeLink(file) {
    var index = this.state.data.indexOf(file);
    this.setState({
      data: update(this.state.data, { $splice: [[index, 1]] })
    });
  },

  dragStart: function(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';

    // // Firefox requires calling dataTransfer.setData
    // // for the drag to properly work
    e.dataTransfer.setData('text/html', e.currentTarget);
  },
  
  dragEnd: function(e) {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(placeholder);

    // Update state
    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    console.log(to, from);
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
    this.over = e.target;
    if ( e.target.className === 'file' ) {
      e.target.parentNode.insertBefore(placeholder, e.target);
    }
  },

  render: function () {
    var data = this.state.data || [];
    var isAdmin = this.props.isAdmin;
    var addLinkButton = '';
    if (isAdmin) {
      addLinkButton = <button className="btn btn-default" onClick={this.addLink}>Add link</button>;
    }

    return (
        <div className="files" onDragOver={this.dragOver}>
          {data.map(function(file, i) {
            return (<FileComponent id={i} dragStart={this.dragStart} dragEnd={this.dragEnd} file={file} onClick={this.removeLink} isAdmin={isAdmin}></FileComponent>);
          }.bind(this))}

          {addLinkButton}

        </div>
      );
  }
});

module.exports = ListComponent; 

