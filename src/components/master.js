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
var jsonDatas = require('../../public/json/master');

var Master = React.createClass({
	mixins: [StylePropable],
    getInitialState: function() {
    	var muiTheme = ThemeManager.getMuiTheme(DefaultRawTheme);
        return {
            tabIndex: '1',
            muiTheme: muiTheme,
            lang: 'zh_cn'
        };
    },
    childContextTypes : {
        muiTheme: React.PropTypes.object,
    },
    getChildContext: function() {
        return {
          muiTheme: this.state.muiTheme
        };
    },
    render: function() {
        var styles = this.getStyles(),
            lang = this.state.lang;
        return ( <AppCanvas> 
		        	{this._getTabs()} 
		        	{React.cloneElement(this.props.children, {lang: lang})} 
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
                left: 65,
                top: 22,
                position: 'absolute',
                fontSize: 26
            },
            svgLogoContainer: {
                position: 'fixed',
                width: 300,
                left: Spacing.desktopGutter,
            },
            svgLogo: {
                width: 65,
                backgroundColor: Colors.cyan500,
                position: 'absolute'
            },
            tabs: {
                width: 425,
                bottom: 0
            },
            inkBarStyle: {
                backgroundColor: Colors.yellow200
            },
            tab: {
                height: 64
            }

        };
        var jsonData = jsonDatas[this.state.lang];
        var productIcon = ( 
        	<EnhancedButton style={styles.svgLogoContainer} linkButton={true} href="/#/home">
	            <img style={this.prepareStyles(styles.svgLogo)} src={jsonData.navLogo.img} />
	            <span style={this.prepareStyles(styles.span)}> {jsonData.navLogo.title} </span> 
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
					             label={jsonData.navHome.title}
					             route="/home"/>
                            <Tab style={styles.tab} value="2"
                                 label={jsonData.navProduct.title}
                                 route="/product"/>
                            <Tab style={styles.tab} value="3"
                                 label={jsonData.navAbout.title}
                                 route="/about"/>
                            <Tab style={styles.tab} value="4"
                                 label={jsonData.navHome.title}
                                 route="/home"/>
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
    this.props.history.pushState(null, tab.props.route);
    this.setState({tabIndex: tab.props.value});
  }
});

module.exports = Master;
