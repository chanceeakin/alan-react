var React = require('react');
var styles = require('./style.js');

module.exports = React.createClass({

	getInitialState: function () {
		return null;
	},
	render: function () {
		return (
			<div>
				<div className="jumbotron text-center" style={styles.jumbotron}>
					<div className="container">
						<h2 className="main-header" style={styles.mainHeader}>TEST BITCH</h2>
					</div>
				</div>

				<div>
					{this.props.children}
				</div>

				<br />
			</div>
		);
	}
});
