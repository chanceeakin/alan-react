var React = require('react');

var SideBar = React.createClass({
	getInitialState: function () {
		return {
			menuShow: false
		};
	},
	showMenu: function () {
		if (!this.state.menuShow) {
			this.setState({
				menuShow: true
			});
		}
	},
	render: function () {
		return (
			<div className="col s3">
				<a className="menu-button btn-floating btn-large waves-effect waves-light amber darken-4"><i className="material-icons">view_list</i></a>
			</div>
		);
	}
});

module.exports = SideBar;
