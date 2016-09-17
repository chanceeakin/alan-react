// Inclue the React library
var React = require('react');

// Include the Router
import {Router, Route, Link, browserHistory} from 'react-router';
//  Include the IndexRoute (catch-all route)
// var IndexRoute = Router.IndexRoute;

// Reference the high-level components
var Index = require('../components/pages/Index');
var ContentPage = require('../components/pages/ContentPage.jsx');

// Export the Routes
module.exports = (
	<Router>
		<Route path="/" component={Index} />
		<Route path="/about" component={ContentPage} />
	</Router>
);
