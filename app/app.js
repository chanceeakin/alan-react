// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
// Grabs the Routes
var Index = require('../components/Index');

// Renders the contents according to the route page.
ReactDOM.render(
	<Index />,
	document.getElementById('app')
);
