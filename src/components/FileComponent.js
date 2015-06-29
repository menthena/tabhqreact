'use strict';

var React = require('react/addons');


require('styles/FileComponent.sass');

var FileComponent = React.createClass({

  render: function () {
    var file = this.props.file;
    return (
      <div className="file">
        <div className="remove pull-left" onClick={this.props.onClick.bind(null, file)}>
          <i className="fa fa-remove fa-lg"></i>
        </div>
        <div className="icon page pull-left">
          <div className="file-icon pdf">
            PDF
          </div>
        </div>
        <div className="details pull-left">
          <div>
            <form>
              <h3>
              <span>
                Slack tips
              </span>
              {
                //<input type="text" placeholder="Enter a title" name="title" required="" /> 
              }
              <i className="fa fa-pencil"></i>
              </h3>
            </form>
            <p>
              <span className="file-type">
                <a target="_blank" href="https://tabhq.s3.amazonaws.com/uploads/download/file/46/slack-tips.pdf">PDF - 498.2 KB</a>
              </span>
              <span> (Last updated 28/04/2015)</span>
            </p>
          </div>
        </div>
        <div className="pull-right">
          <div className="icon download pull-left">
            <a href="https://tabhq.s3.amazonaws.com/uploads/download/file/46/slack-tips.pdf">
              <img alt="Download" src="images/download.gif" />
            </a>
          </div>
          <div className="pull-left re-order">
            <i className="fa fa-reorder fa-lg" draggable="true" onDragEnd={this.props.dragEnd} onDragStart={this.props.dragStart}></i>
          </div>
        </div>
      </div>  
    );
  }
});

module.exports = FileComponent; 

