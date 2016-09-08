// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router').Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Index');

// Export the Routes
module.exports = (
	<Router path="/" component={Main}></Router>
);
