var React = require('react');
var Body = require('./body');
var BodyContainer = require('./bodyContainer');
var ProductItem = require('./product/productItem');

var Product = React.createClass({
	render: function(){
		var style = {
			item: {
				display: 'inline-block',
				marginRight: '10px',
				marginLeft: '10px',
				marginBottom: '20px'
			}
		};
		return (
				<Body>
					<BodyContainer>
						<ProductItem style={style.item}>
						</ProductItem>
						<ProductItem style={style.item}>
						</ProductItem>
						<ProductItem style={style.item}>
						</ProductItem>
						<ProductItem style={style.item}>
						</ProductItem>
						<ProductItem style={style.item}>
						</ProductItem>
						<ProductItem style={style.item}>
						</ProductItem>
					</BodyContainer>
				</Body>
			)
	}
});

module.exports = Product;