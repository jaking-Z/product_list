'use strict'

var React = require('react');
var AppCanvas = require('material-ui/lib/app-canvas');
var EnhancedButton = require('material-ui/lib/enhanced-button');
var Paper = require('material-ui/lib/paper');
var Tabs = require('material-ui/lib/tabs/tabs');
var Tab = require('material-ui/lib/tabs/tab');
var FullWidthSection = require('./full-width-section');
console.log(AppCanvas);
var Master = React.createClass({
	getInitialState: function(){
		return {
			tabIndex: 1
		};
	},
	render: function(){
		return (
			<AppCanvas>
				{this._getTabs()}
				{this.props.children}
				<FullWidthSection>
					<p>联系我们</p>
				</FullWidthSection>
			</AppCanvas>
			);
	},
	_getTabs: function(){
		return '';
		var productIcon = (
				<EnhancedButton linkButton={true} href="/#/home">
					<img src="" />
					<span>产品名称</span>
				</EnhancedButton>
			);
		return (
			<div>
				<Paper zDepth={0} rounded={false}>
					{productIcon}
					<div>
						<Tabs 
							value={this.state.tabIndex} 
							onChange={this._handleTabChange}>
							<Tab 
								value="1" 
								lable="Home" 
								route="" />
							<Tab 
								value="1" 
								lable="Home" 
								route="" />
						</Tabs>
					</div>
				</Paper>
			</div>
			);
	}
});

module.exports = Master;