var React = require('react');
var Spacing = require('material-ui').Styles.Spacing;
var StylePropable = require('material-ui').Mixins.StylePropable;

var Body = React.createClass({
	mixins: [StylePropable],
	contextTypes: {
	    muiTheme: React.PropTypes.object
	 },
	render: function(){
		var styles = this._getStyles();
		return (
				<div style={this.prepareStyles(styles.root)}>
					{this.props.children}
				</div>
			);
	},
	_getStyles: function(){
		return {
			root: {
				paddingTop: Spacing.desktopKeylineIncrement + 'px',
				minHeight: '497px'
			}
		}
	}
});

module.exports = Body;