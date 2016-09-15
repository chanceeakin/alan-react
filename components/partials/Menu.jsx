var React = require('react');
var Menu = require('react-burger-menu').scaledown;

module.exports = React.createClass({
	showSettings: function (event) {
		event.preventDefault();
	},
	render: function () {
		return (
			<div id="outer-container">
				<Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
				<main id="page-wrap">
					<a id="home" className="menu-item" href="/">Home</a>
					<a id="about" className="menu-item" href="/about">About</a>
					<a id="contact" className="menu-item" href="/contact">Contact</a>
					<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
				</main>
			</div>
		);
	}
});
