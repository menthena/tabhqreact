'use strict';

var React = require('react/addons');


require('styles/FileComponent.sass');

var FileComponent = React.createClass({

  render: function () {
    var file = this.props.file,
        icon = <div className="file-icon pdf">{file.extension}</div>,
        info = 'PDF - 498.2 KB',
        image = <img alt="Download" src="images/download.gif" />;

    if (file.type === 'url') {
      icon = <img src="images/icon-browser.gif" />;
      image = <img alt="Download" src="images/url.gif" />;
      info = file.url;
    }

    return (
      <div data-order={this.props.order} className="file" data-droppable="file" draggable="true" onMouseDown={this.props.mouseDown} onDragEnd={this.props.dragEnd} onDragStart={this.props.dragStart}>
        <div className="remove pull-left" onClick={this.props.onClick.bind(null, file)}>
          <i className="fa fa-remove fa-lg"></i>
        </div>
        <div className="icon page pull-left">
          {icon}
        </div>
        <div className="details pull-left">
          <div>
            <form>
              <h3>
              <span>
                {file.title}
              </span>
              {
                //<input type="text" placeholder="Enter a title" name="title" required="" /> 
              }
              <i className="fa fa-pencil"></i>
              </h3>
            </form>
            <p>
              <span className="file-type">
                <a target="_blank" href="{file.url}">{info}</a>
              </span>
              <span> (Last updated 28/04/2015)</span>
            </p>
          </div>
        </div>
        <div className="pull-right">
          <div className="icon download pull-left">
            <a href="{file.url}">
              {image}
            </a>
          </div>
          <div className="pull-left re-order">
            <i className="fa fa-reorder fa-lg drag-controller"></i>
          </div>
        </div>
      </div>  
    );
  }
});

module.exports = FileComponent; 

