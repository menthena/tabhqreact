'use strict';

var React = require('react/addons');

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
    var index = this.key;

    return (
        <section ref={'section_' + index}>
          <div className='content-inner'>
            <header>
              <h1>{section.title}</h1>
            </header>
            <div className='copy' dangerouslySetInnerHTML={{__html: section.copy}} />
          </div>
        </section>
      );
  }
});

module.exports = ContentSection; 

