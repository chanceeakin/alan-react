var React = require('react');
var Test = require('./partials/Test.jsx');

var Index = React.createClass({

	getInitialState: function () {
		return null;
	},
	render: function () {
		return (
			<div className="center-align">
				<div className="jumbotron text-center">
					<div className="container">
						<h1 className="main-header">AP Human Geography</h1>
					</div>
					<Test />
				</div>
			</div>
		);
	}
});

module.exports = Index;
