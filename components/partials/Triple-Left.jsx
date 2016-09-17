var React = require('react');

var style = {
	height: '50vh'
};

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div className="col s4 center-align triple" style={{height: style.height}}>
					<h3>Quiz Time</h3>
					<i className="large material-icons">assignment</i>
					<br />
					<a className="triple-button waves-effect waves-light btn" href="http://lizardpoint.com/geography/world-countries-quiz.php">Country Quiz</a>
					<p></p>
					<a className="triple-button waves-effect waves-light btn" href="https://www.quia.com/shared/geography/">Geography Games</a>
				</div>
			</div>
		);
	}
});
