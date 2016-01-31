var React = require('react');
var Card = require('material-ui/lib/card/card');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text'); 
var Colors = require('material-ui/lib/styles/colors');

var AboutContent = React.createClass({
	render: function(){
		var style = {
				text: {
					fontSize: 16,
					color: Colors.lightBlack
				}
			},
			textJsx = this.props.jsonData.desc.map(function(text){
				return (<p style={style.text}>{text}</p>);
			});
		return (
			<Card>
				<CardTitle title={this.props.jsonData.title} />
				<CardText>
					{textJsx}
				</CardText>
			</Card>
			);
	}
});

module.exports = AboutContent;