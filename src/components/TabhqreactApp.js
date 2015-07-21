'use strict';

var _ = require('lodash');
var React = require('react/addons');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Router = require('react-router');
var Menu = require('./Menu');
var Content = require('./Content');
var ReactTransitionGroup = React.addons.TransitionGroup;
var AppStore = require('../stores/AppStore');

function getCategories() {
  return {
    items: AppStore.getCategories()
  };
}

// CSS
require('../styles/main.sass');

var TabhqreactApp = React.createClass({

  getInitialState: function() {
    return getCategories();
  },

  handleSectionScroll: function(sectionTitle) {
    this.setState({
      currentSection: sectionTitle
    });
  },

  updateCategories: function(categories) {
    this.setState({
      categories: categories
    });
  },

  updateSections: function(category, sections) {
    var categories = this.state.categories;
    _.find(categories, function(categoryInState, index) {
      if (category.id === categoryInState.id) {
        categories[index].sections = sections;
      }
    });
    this.setState({
      categories: categories
    });
  },

  updateSection: function(section) {

  },

  handleScroll() {
    this.refs.content.onScroll();
  },

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      document.addEventListener('scroll', this.handleScroll);
    }
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  },

  render: function() {
    return (
      <div id='wrapper'>
        <Menu categories={this.state.items} updateSections={this.updateSections} updateCategories={this.updateCategories} currentSection={this.state.currentSection} />
        <Content isAdmin={this.state.isAdmin} categories={this.state.items} updateSections={this.updateSections} onSectionScroll={this.handleSectionScroll} ref='content' />
      </div>
    );
  }
});

module.exports = TabhqreactApp;
