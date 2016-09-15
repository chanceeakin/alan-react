var React = require('react');
var SideBar = require('./partials/SideBar.jsx');
var Content = require('./partials/Content.jsx');
var Jumbotron = require('./partials/Jumbotron.jsx');
var Triple = require('./partials/Triple.jsx');

var Index = React.createClass({
	getInitialState: function () {
		return null;
	},
	render: function () {
		return (
			<div>
				<div className="row">
					<SideBar />
					<Jumbotron />
					<Content />
				</div>
				<div className="row">
					<Triple />
					<Triple />
					<Triple />
				</div>
			</div>
		);
	}
});

module.exports = Index;
