var React = require('react');
var SideBar = require('./partials/SideBar.jsx');
var Content = require('./partials/Content.jsx');

var styles = {
	height: '100vh'
};

var Index = React.createClass({
	getInitialState: function () {
		return null;
	},
	render: function () {
		return (
			<div className="center-align">
				<div className="jumbotron text-center" style={{height: styles.height}}>
					<div className="container">
						<h1 className="main-header">AP Human Geography</h1>
					</div>
				</div>
				<div className="row">
					<SideBar />
					<Content />
				</div>
			</div>
		);
	}
});

module.exports = Index;
