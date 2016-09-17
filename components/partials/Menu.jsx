var React = require('react');
var Menu = require('react-burger-menu').pushRotate;

module.exports = React.createClass({
	showSettings: function (event) {
		event.preventDefault();
	},
	render: function () {
		return (
			<Menu>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
				<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
			</Menu>
		);
	}
});
