var DragMixin = {

  componentWillMount() {
    this.draggableData = [];
  },

  loadDraggableData: function(data) {
    this.draggableData = data;
  },

  dragStart: function(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    this.placeholder = document.createElement("div");
    this.placeholder.className = "placeholder";

    // // Firefox requires calling dataTransfer.setData
    // // for the drag to properly work
    e.dataTransfer.setData('text/html', e.currentTarget);
  },

  dragHover: function(e){
    // console.log(e.currentTarget);
  },
  
  dragEnd: function(e) {
    if (this.dragged.dataset.droppable === e.target.dataset.droppable) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(this.placeholder);

      // Update state
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if (from < to) { 
        to--;
      }
      this.draggableData.splice(to, 0, this.draggableData.splice(from, 1)[0]);
      this.setState({data: this.draggableData});
      this.dragged = null;
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