var React = require('react');

var style = {
	height: '100vh',
	background: 'cyan'
};

module.exports = React.createClass({
	render: function () {
		return (
			<div id="callout" className="col s12 content center-align" style={{backgroundColor: style.background}}>
				<h2>Ooooh wee. More content here.</h2>
			</div>
		);
	}
});
