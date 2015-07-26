'use strict';

var _ = require('lodash');
var React = require('react/addons');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Router = require('react-router');
var Menu = require('./Menu');
var Content = require('./Content');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Api = require('../utils/Api');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// CSS
require('../styles/main.sass');

var TabhqreactApp = React.createClass({

  getInitialState: function() {
    return {
      items: []
    };
  },

  handleSectionScroll: function(sectionTitle) {
    this.setState({
      currentSection: sectionTitle
    });
  },

  _onChange() {
    this.setState({
      items: AppStore.getCategories()
    });
  },

  handleScroll() {
    this.refs.content.onScroll();
  },

  componentDidMount() {
    AppActions.getCategories();
    AppStore.addChangeListener(this._onChange);

    if (ExecutionEnvironment.canUseDOM) {
      document.addEventListener('scroll', this.handleScroll);
    }
  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
    document.removeEventListener('scroll', this.handleScroll);
  },

  render: function() {
    return (
      <div id='wrapper'>
        <Menu categories={this.state.items} currentSection={this.state.currentSection} />
        <Content isAdmin={this.state.isAdmin} categories={this.state.items} onSectionScroll={this.handleSectionScroll} ref='content' />
      </div>
    );
  }
});

module.exports = TabhqreactApp;
