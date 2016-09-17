var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Tutorial Hours</h5>
							<p className="grey-text text-lighten-4">Wednesdays: 4:20pm-5:20pm</p>
							<p className="grey-text text-lighten-4">Thursdays: 4:20pm-5:20pm</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Contact</h5>
							<ul>
								<li><a href="mailto:alan.cardon@pfisd.net"><i className="tiny material-icons">email</i>  alan.cardon@pfisd.net</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
					© 2016 Alan Cardon and Chance Eakin
					</div>
				</div>
			</footer>
		);
	}
});
