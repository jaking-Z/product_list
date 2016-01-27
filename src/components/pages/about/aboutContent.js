var React = require('react');
var Card = require('material-ui/lib/card/card');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text'); 

var AboutContent = React.createClass({
	render: function(){
		return (
			<Card>
				<CardTitle title="关于我们" />
				<CardText>
					<p>要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？要怎么介绍我们呢？？？</p>
					<p>简单一点形容就一个字【叼】！</p>
				</CardText>
			</Card>
			);
	}
});

module.exports = AboutContent;