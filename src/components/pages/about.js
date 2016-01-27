var React = require('react');
var Body = require('./body');
var BodyContainer = require('./bodyContainer');
var AboutContent = require('./about/aboutContent');

var About = React.createClass({
	render: function(){
		return (
				<Body>
					<BodyContainer>
						<AboutContent />
					</BodyContainer>
				</Body>
			)
	}
});

module.exports = About;