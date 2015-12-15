'use strict'

var React = require('react');
var ClearFix = require('material-ui/lib/clearfix');

var FullWidthSection = React.createClass({
	render: function(){
		return (
			<ClearFix>
				{this.props.children}
			</ClearFix>
			);
	}
});

module.exports = FullWidthSection;