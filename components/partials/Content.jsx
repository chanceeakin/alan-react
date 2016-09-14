var React = require('react');

var style = {
	height: '100vh',
	background: 'cyan'
};

var SideBar = React.createClass({
	render: function () {
		return (
			<div className="col s9" style={{backgroundColor: style.background}}>
				<h2>Ooooh wee. More content here.</h2>
			</div>
		);
	}
});

module.exports = SideBar;
