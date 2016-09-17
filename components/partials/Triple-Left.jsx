var React = require('react');

var style = {
	height: '50vh'
};

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div className="col s4 center-align triple" style={{height: style.height}}>
					<h3>Left Content</h3>
				</div>
			</div>
		);
	}
});
