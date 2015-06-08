'use strict';

var React = require('react/addons');

require('styles/ContentSection.sass');

var ContentSection = React.createClass({
  mixins: [],
  getInitialState: function() { return({}); },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  propTypes: {
    section: React.PropTypes.object.isRequired
  },

  render: function () {
    var section = this.props.section;

    return (
        <section>
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

