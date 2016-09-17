var React = require('react');

var style = {
	height: '55vh'
};

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div className="col s4 center-align triple" style={{height: style.height}}>
					<h3>Helpful Links</h3>
					<i className="large material-icons">view_list</i>
					<p>AP Human Geography Textbook</p>
					<a className="triple-button waves-effect waves-light btn" href="http://www.pearsonmylabandmastering.com/northamerica/masteringgeography/" target="_blank">Textbook</a>
					<p>College Board AP Human Geography Course Overview</p>
					<a className="triple-button waves-effect waves-light btn" href="https://apstudent.collegeboard.org/apcourse/ap-human-geography" target="_blank">College Board</a>
				</div>
			</div>
		);
	}
});
