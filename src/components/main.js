'use strict';

var TabhqreactApp = require('./TabhqreactApp');
var PageWidget = require('./PageWidget');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={TabhqreactApp}>
    <Route name="/" handler={TabhqreactApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
