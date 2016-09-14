var React = require('react');

var style = {
	height: '100vh',
	background: 'tomato'
};

var SideBar = React.createClass({
	render: function () {
		return (
			<div className="col s3" style={{backgroundColor: style.background}}>
				<h2>Here's where more fun stuff goes!</h2>
			</div>
		);
	}
});

module.exports = SideBar;
