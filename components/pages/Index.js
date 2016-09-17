var React = require('react');

var Menu = require('../partials/Menu.jsx');
var Content = require('../partials/Content.jsx');
var Jumbotron = require('../partials/Jumbotron.jsx');
var TripleLeft = require('../partials/Triple-Left.jsx');
var TripleCenter = require('../partials/Triple-Center.jsx');
var TripleRight = require('../partials/Triple-Right.jsx');
var Footer = require('../partials/Footer.jsx');

var Index = React.createClass({
	render: function () {
		return (
			<div>
				<Menu />
				<div className="row">
					<Jumbotron />
					<Content />
				</div>
				<div className="row">
					<TripleLeft />
					<TripleCenter />
					<TripleRight />
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = Index;
