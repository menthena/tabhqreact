'use strict';

var React = require('react/addons');
var PageComponent = require('./PageComponent');
var Editor = require('react-medium-editor');

require('styles/ContentSection.sass');

var ContentSection = React.createClass({

  propTypes: {
    section: React.PropTypes.object.isRequired
  },

  getOffsetTop: function() {
    var domNode = this.refs['section_' + this.key].getDOMNode();
    return domNode.getBoundingClientRect().top;
  },

  render: function () {
    var section = this.props.section;
    var isAdmin = this.props.isAdmin;
    var index = this.key;

    return (
        <section ref={'section_' + index}>
          <div className='content-inner'>
            <header>
              <Editor tag="h1" text={section.title} options={{buttons:[]}} />
            </header>
            <PageComponent isAdmin={isAdmin} copy={section.copy} data={section.data}></PageComponent>
          </div>
        </section>
      );
  }
});

module.exports = ContentSection; 

