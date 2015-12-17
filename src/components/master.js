'use strict'

var React = require('react');
var AppCanvas = require('material-ui/lib/app-canvas');
var EnhancedButton = require('material-ui/lib/enhanced-button');
var Paper = require('material-ui/lib/paper');
var Tabs = require('material-ui/lib/tabs/tabs');
var Tab = require('material-ui/lib/tabs/tab');
var FullWidthSection = require('./full-width-section');
var Styles = require('material-ui/lib/styles');
var Spacing = Styles.Spacing;
var Colors = Styles.Colors;
var Typography = Styles.Typography;
var ThemeManager = Styles.ThemeManager;
var DefaultRawTheme = Styles.LightRawTheme;
var StylePropable = require('material-ui/lib/mixins').StylePropable;
console.log(AppCanvas);
var Master = React.createClass({
	mixins: [StylePropable],
    getInitialState: function() {
    	var muiTheme = ThemeManager.getMuiTheme(DefaultRawTheme);
        return {
            tabIndex: '1',
            muiTheme: muiTheme
        };
    },
    render: function() {
        var styles = this.getStyles();
        return ( <AppCanvas> 
		        	{this._getTabs()} 
		        	{this.props.children} 
		        	<FullWidthSection style={styles.footer}>
			            <p style={this.prepareStyles(styles.p)}> 联系我们 </p> 
		            </FullWidthSection> 
	            </AppCanvas>
        );
    },
    _getTabs: function() {
        var styles = {
            root: {
                backgroundColor: Colors.cyan500,
                position: 'fixed',
                height: 64,
                top: 0,
                right: 0,
                zIndex: 1101,
                width: '100%',
            },
            container: {
                position: 'absolute',
                right: (Spacing.desktopGutter / 2) + 48,
                bottom: 0,
            },
            span: {
                color: Colors.white,
                fontWeight: Typography.fontWeightLight,
                left: 45,
                top: 22,
                position: 'absolute',
                fontSize: 26,
            },
            svgLogoContainer: {
                position: 'fixed',
                width: 300,
                left: Spacing.desktopGutter,
            },
            svgLogo: {
                width: 65,
                backgroundColor: Colors.cyan500,
                position: 'absolute',
                top: 20,
            },
            tabs: {
                width: 425,
                bottom: 0,
            },
            inkBarStyle: {
                backgroundColor: '#fff59d',
            },
            tab: {
                height: 64,
            }

        };
        var productIcon = ( 
        	<EnhancedButton style={styles.svgLogoContainer} linkButton={true} href="/#/home">
	            <img style={this.prepareStyles(styles.svgLogo)} src="" />
	            <span style={this.prepareStyles(styles.span)}> 产品名称 </span> 
            </EnhancedButton>
        );
        return ( 
        	<div>
	            <Paper style={styles.root} zDepth={0} rounded={false}> {productIcon} 
		            <div style={this.prepareStyles(styles.container)}>
			            <Tabs style={styles.tabs} value={this.state.tabIndex}
                         inkBarStyle={styles.inkBarStyle}
			             onChange={this._handleTabChange}>
				            <Tab style={styles.tab} value="1"
					             label="Home"
					             route="/home"/>
                            <Tab style={styles.tab} value="2"
                                 label="Home2"
                                 route=""/>
                            <Tab style={styles.tab} value="2"
                                 label="Home2"
                                 route=""/>
                            <Tab style={styles.tab} value="2"
                                 label="Home2"
                                 route=""/>
			            </Tabs> 
		            </div> 
	            </Paper> 
            </div>
        );
    },
    getStyles: function() {
    var darkWhite = Colors.darkWhite;
    return {
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center',
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: Colors.lightWhite,
        maxWidth: 335,
      }
    };
  },

  _handleTabChange: function(value, e, tab) {
    // this.props.history.pushState(null, tab.props.route);
    // this.setState({tabIndex: this._getSelectedIndex()});
  }
});

module.exports = Master;
