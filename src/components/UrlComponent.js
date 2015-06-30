'use strict';

var React = require('react/addons');


require('styles/UrlComponent.sass');

var UrlComponent = React.createClass({

  render: function () {
    var url = this.props.url;
    return (
      <div data-id={this.props.id}  className="file" draggable="true" onDragEnd={this.props.dragEnd} onDragStart={this.props.dragStart}>
        <div className="remove pull-left">
          <i className="fa fa-remove fa-lg"></i>
        </div>
        <div className="icon page pull-left">
          <img src="images/icon-browser.gif" />
        </div>
        <div className="details pull-left">
          <div>
            <form>
              <h3>
              <span>
                {url.title}
              </span>
              {
                //<input type="text" placeholder="Enter a title" name="title" required="" /> 
              }
              <i className="fa fa-pencil"></i>
              </h3>
            </form>
            <p>
              <span className="file-type">
                <a target="_blank" href="https://tabhq.s3.amazonaws.com/uploads/download/file/46/slack-tips.pdf">google.com</a>
              </span>
            </p>
          </div>
        </div>
        <div className="pull-right">
          <div className="icon download pull-left">
            <a href="https://tabhq.s3.amazonaws.com/uploads/download/file/46/slack-tips.pdf" target="_blank">
              <img alt="Download" src="images/url.gif" />
            </a>
          </div>
          <div className="pull-left re-order">
            <i className="fa fa-reorder fa-lg ui-sortable-handle"></i>
          </div>
        </div>
      </div>  
    );
  }
});

module.exports = UrlComponent; 

