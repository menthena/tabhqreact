'use strict';

require('../styles/DragMixin.sass');
var _ = require( 'lodash' );

var DragMixin = {

  componentWillMount() {
    this.draggableData = [];
  },

  loadDraggableData: function(data) {
    this.draggableData = data;
  },

  dragStart: function(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'copy';
    this.placeholder = document.createElement("div");
    this.placeholder.className = "placeholder";

    // // Firefox requires calling dataTransfer.setData
    // // for the drag to properly work
    e.dataTransfer.setData('text/html', e.currentTarget);
  },

  drop: function(e){
    e.preventDefault();
    if (e.dataTransfer.effectAllowed !== 'copy') {
      this.add({
        'title': 'IT Guide',
        'extensions': 'PDF',
        'url': 'http://google.com',
        'size': 2077912,
        'updated_at': '2014-12-10T13:48:35.808Z',
        'order': this.draggableData.length - 1
      });
    }
  },

  mouseDown: function(e){
    var element = e.target;
    if (element.className.indexOf('drag-controller') === -1) {
      e.stopPropagation();
      e.preventDefault();
    }
  },
  
  dragEnd: function(e) {
    if (this.dragged.dataset.droppable === e.target.dataset.droppable) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(this.placeholder);

      // Update state
      var from = Number(this.dragged.dataset.order);
      var to = Number(this.over.dataset.order);
      if (!isNaN(to) && !isNaN(from)) {
        var dragged = _.find(this.draggableData, { order: from});
        var over = _.find(this.draggableData, { order: to});
        dragged.order = to;
        over.order = from;
        this.draggableData.sort(function (a, b) {
          return a.order - b.order;
        });
        this.setDraggableData(this.draggableData);
      }
      this.dragged = null;
    } else {
      // this.dragged.parentNode.removeChild(this.placeholder);
    }
  },
  
  dragOver: function(e) {
    e.preventDefault();
    this.over = e.target;
    if (!this.over.draggable) {
      this.over = this.over.parentNode;
    }
    if (this.dragged && this.dragged.dataset.droppable === this.over.dataset.droppable) {
      this.dragged.style.display = 'none';
      if (this.over.className === 'placeholder') {
        return;
      }
      if (this.over.dataset.droppable) {
        this.over.parentNode.insertBefore(this.placeholder, this.over);
      }
    }
  }

};


module.exports = DragMixin;