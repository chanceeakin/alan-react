// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, Link, browserHistory } from 'react-router';

// Grab the proeprty associated with the Router
// Grabs the Routes
// var Index = require('../components/pages/Index');
var Routes = require('./routes.js');

// Renders the contents according to the route page.
ReactDOM.render(
	<Router>{Routes}
	</Router>,
	document.getElementById('app')
);
