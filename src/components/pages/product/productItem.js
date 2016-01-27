var React = require('react');
var Card = require('material-ui/lib/card/card');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var Colors = require('material-ui/lib/styles/colors');

var ProductItem = React.createClass({
	render: function(argument) {
		var style = this.getStyle();
		return (
			<Card style={this.props.style}>
				<CardMedia>
					<img style={style.img} src="/public/img/product/example.jpg"/>
				</CardMedia>
				<div style={style.desc}>
					<span style={style.descTitle}>名称吊炸天</span>
					<span style={style.descPrice}>编号:052</span>
					<span style={style.descPrice}>大小:40*40*27</span>
					<span style={style.descPrice}>￥13.5 (SSS)</span>
					<span style={style.descPrice}>￥16.0 (MIRROR)</span>
				</div>
			</Card>
			);
	},
	getStyle: function(){
		return {
			img: {
				width: '228px',
				height: '171px'
			},
			desc: {
				padding: '16px'
			},
			descTitle: {
				fontSize: 20,
				color: Colors.darkBlack,
				display: 'block',
				marginBottom: '5px'
			},
			descPrice: {
				fontSize: 16,
				color: Colors.lightBlack,
				display: 'block'
			}
		}
	}
});

module.exports = ProductItem;