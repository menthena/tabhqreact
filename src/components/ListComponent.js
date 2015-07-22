'use strict';

var React = require('react/addons');
var FileComponent = require('./FileComponent');
var UrlComponent = require('./UrlComponent');
var DragMixin = require('../mixins/DragMixin');
var GoogleDriveMixin = require('../mixins/GoogleDriveMixin');
var update = React.addons.update;

require('styles/ListComponent.sass');

var ListComponent = React.createClass({
  mixins: [DragMixin, GoogleDriveMixin],

  setDraggableData: function(sections) {
    this.setState({
      data: sections
    });
  },

  addLink: function(elem) {
    this.setState({
      data: update(this.state.data, { $push: [elem] })
    });
  },

  getInitialState: function() {
    return {
      data: this.props.data
    };
  },

  addLinkPlaceholder: function() {
    //var update = React.addons.update;
    var elem = {
      'title': 'IT Guide',
      'extensions': 'PDF',
      'url': 'http://google.com',
      'size': 2077912,
      'updated_at': '2014-12-10T13:48:35.808Z',
      'order': this.state.data.length - 1
    };
    this.addLink(elem);
  },

  removeLink(file) {
    var index = this.state.data.indexOf(file);
    this.setState({
      data: update(this.state.data, { $splice: [[index, 1]] })
    });
  },

  render: function () {
    var data = this.state.data || [];
    var isAdmin = this.props.isAdmin;
    var addLinkButton = '';
    var googleDriveButton = '';
    if (isAdmin) {
      addLinkButton = <button className="btn btn-default" onClick={this.addLinkPlaceholder}>Add link</button>;
      googleDriveButton = <button id="google-button" className="btn btn-default" onClick={this.addFilesFromGoogleDrive}>Add from Google Drive</button>;
    }
    this.loadDraggableData(this.state.data);
    return (
        <div className="files" onDragOver={this.dragOver} onDrop={this.drop}>
          {data.map(function(file, i) {
            return (<FileComponent order={file.order} dragStart={this.dragStart} dragEnd={this.dragEnd} mouseDown={this.mouseDown} file={file} onClick={this.removeLink} isAdmin={isAdmin}></FileComponent>);
          }.bind(this))}

          {addLinkButton}
          {googleDriveButton}

        </div>
      );
  }
});

module.exports = ListComponent; 

