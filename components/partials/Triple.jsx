var React = require('react');

var style = {
	height: '50vh'
};

var Triple = React.createClass({
	render: function () {
		return (
			<div>
				<div className="col s4 center-align triple" style={{height: style.height}}>
					<h3>This is where triple text will go.</h3>
				</div>
			</div>
		);
	}
});

module.exports = Triple;
