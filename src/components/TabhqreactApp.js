'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Menu = require('./Menu');
var Content = require('./Content');
var ReactTransitionGroup = React.addons.TransitionGroup;


// CSS
require('../styles/main.sass');

var TabhqreactApp = React.createClass({

  render: function() {

    var sections = [{
      'title': 'Home',
      'copy': '<p>Welcome to the Beta v0.1 of TAB\'s Resource Centre. We created this site to better store and share useful information across the company.</p>' +
        '<p>For this version, you\'ll find two sections. The first section is for new starters: click New to Tab? to go to a set of useful induction information. The second section is useful for everyone, and contains our brand guidelines and assets - like our logo.</p>' +
        '<p>It\'s a first release so do let us know any feedback or suggestions you have by dropping an <a href="mailto:emily@theappbusiness.com?Subject=Resource%20centre%20feedback">email to Emily</a>.</p>',
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
        <Menu categories={categories}/>
        <Content sections={sections}/>
      </div>
    );
  }
});

module.exports = TabhqreactApp;
