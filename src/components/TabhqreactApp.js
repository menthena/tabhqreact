'use strict';

var React = require('react/addons');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Router = require('react-router');
var Menu = require('./Menu');
var Content = require('./Content');
var ReactTransitionGroup = React.addons.TransitionGroup;


// CSS
require('../styles/main.sass');

var TabhqreactApp = React.createClass({

  getInitialState: function() {
    return {
      currentSection: null,
      isAdmin: true
    };
  },

  handleSectionScroll: function(sectionTitle) {
    this.setState({
      currentSection: sectionTitle
    });
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

    var files = [{
      'title': 'IT Guide',
      'extensions': 'PDF',
      'url': 'http://google.com',
      'size': 2077912,
      'updated_at': '2014-12-10T13:48:35.808Z'
    },
    {
      'title': 'Slack',
      'extensions': 'PDF',
      'url': 'http://yahoo.com',
      'size': 207912,
      'updated_at': '2014-12-10T13:48:35.808Z'
    },
    {
      'title': 'Slack Tips',
      'extensions': 'PDF',
      'url': 'http://asd.com',
      'size': 20377912,
      'updated_at': '2014-12-10T13:48:35.808Z'
    }];

    var sections = [{
      'title': 'Home',
      'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>',
      'files' : files
    }, {
      'title' : 'test 2',
      'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>'
    }, {
      'title' : 'test 3',
      'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>'
    }, {
      'title' : 'test 4',
      'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>'
    }, {
      'title' : 'test 5',
      'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>'
    }];

    var categories = [{
      'title': 'Home',
      'sections': []
    },{
      'title': 'Category 1',
      'sections': sections
    },{
      'title': 'Category 2',
      'sections': sections
    },{
      'title': 'Category 3',
      'sections': sections
    },{
      'title': 'Category 4',
      'sections': sections
    }];

    return (
      <div id='wrapper'>
        <Menu categories={categories} currentSection={this.state.currentSection} />
        <Content isAdmin={this.state.isAdmin} sections={sections} onSectionScroll={this.handleSectionScroll} ref='content' />
      </div>
    );
  }
});

module.exports = TabhqreactApp;
