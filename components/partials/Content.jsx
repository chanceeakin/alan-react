var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div id="content" className="col s12 content center-align cyan darken-1">
				<div className="row">
					<h2 className="content-title col s12">Mr. Cardon's AP Human Geography</h2>
					<p className="content-paragraph col s6 offset-s3">Your 2016-2017 Guide to all things AP Human Geography. Follow the links to find study guides, course materials, test and exam preparation, and more. If you have any questions, please email me.</p>
					 <iframe width="448" height="252" src="https://www.youtube.com/embed/naK9_JkFAOk" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
		);
	}
});
