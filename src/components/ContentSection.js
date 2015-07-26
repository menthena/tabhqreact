'use strict';

var React = require('react/addons');
var PageComponent = require('./PageComponent');
var AppActions = require('../actions/AppActions');
var Editor = require('react-medium-editor');

require('styles/ContentSection.sass');

var ContentSection = React.createClass({

  propTypes: {
    section: React.PropTypes.object.isRequired
  },

  getOffsetTop: function() {
    var domNode = this.refs['section_' + this.props.section.id].getDOMNode();
    return domNode.getBoundingClientRect().top;
  },

  handleContentChange(title) {
    AppActions.updateSection(this.props.section.id, {title: title});
  },

  getInitialState: function() {
    return {
      copy: this.props.copy
    };
  },

  render: function () {
    var section = this.props.section;
    var isAdmin = this.props.isAdmin;
    var index = section.id;

    return (
        <section ref={'section_' + index}>
          <div className='content-inner'>
            <header>
              <Editor tag="h1" text={section.title} onChange={this.handleContentChange} options={{buttons:[]}} />
            </header>
            <PageComponent index={index} isAdmin={isAdmin} copy={section.copy} data={section.data}></PageComponent>
          </div>
        </section>
      );
  }
});

module.exports = ContentSection;
