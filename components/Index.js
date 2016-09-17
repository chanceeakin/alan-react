var React = require('react');

var Menu = require('./partials/Menu.jsx');
var Content = require('./partials/Content.jsx');
var Jumbotron = require('./partials/Jumbotron.jsx');
var Triple = require('./partials/Triple.jsx');

var Index = React.createClass({
	render: function () {
		return (
			<div>
				<Menu />
				<div className="row">
					<Jumbotron
						scrollContent={this.scrollContent} />
					<Content />
				</div>
				<div className="row">
					<Triple />
					<Triple />
					<Triple />
				</div>
			</div>
		);
	}
});

module.exports = Index;
