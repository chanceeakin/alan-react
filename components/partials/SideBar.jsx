var React = require('react');

var SideBar = React.createClass({
	getInitialState: function () {
		return {
			menuShow: false
		};
	},
	scrollToContent: function () {
		scroller.scrollTo('myScrollToElement', {
			duration: 1500,
			delay: 100,
			smooth: true
		});
	},
	render: function () {
		return (
			<div className="col s3">
				<a onClick={this.scrollToContent} className="menu-button btn-floating btn-large waves-effect waves-light amber darken-4"><i className="material-icons">view_list</i></a>
			</div>
		);
	}
});

module.exports = SideBar;
