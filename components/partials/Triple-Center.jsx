var React = require('react');

var style = {
	height: '55vh'
};

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div className="col s12 m4 center-align triple" style={{height: style.height}}>
					<h3>AP Test Information</h3>
					<i className="large material-icons">search</i>
					<h5>2017 Test Date</h5>
					<p>Friday, May 12th, 2017</p>
					<p>8:00am</p>
					<a className="triple-button waves-effect waves-light btn" href="https://apscore.collegeboard.org/scores?ep_ch=PR&amp;ep_mid=11242583&amp;ep_rid=177437514" target="_blank">Get Your Score</a>
				</div>
			</div>
		);
	}
});
