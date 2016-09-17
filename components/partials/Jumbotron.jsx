var React = require('react');

var Jumbotron = React.createClass({
	render: function () {
		return (
			<div>
				<div className="jumbotron center-align">
					<div className="darken-effect">
						<h1 className="main-header">AP Human Geography</h1>
						<a href="#content" className="waves-effect waves-light btn jumbotron-button">Let's Begin.</a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Jumbotron;
