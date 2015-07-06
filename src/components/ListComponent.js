'use strict';

var React = require('react/addons');
var FileComponent = require('./FileComponent');
var UrlComponent = require('./UrlComponent');
var DragMixin = require('../mixins/DragMixin');
var update = React.addons.update;

require('styles/ListComponent.sass');

var ListComponent = React.createClass({
  mixins: [DragMixin],

  componentDidMount() {
    this.loadDraggableData(this.state.data);
  },

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
            return (<FileComponent id={i} dragStart={this.dragStart} dragEnd={this.dragEnd} mouseDown={this.mouseDown} file={file} onClick={this.removeLink} isAdmin={isAdmin}></FileComponent>);
          }.bind(this))}

          {addLinkButton}

        </div>
      );
  }
});

module.exports = ListComponent; 

