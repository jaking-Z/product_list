'use strict'

var React = require('react');


var Main = React.createClass({
    render: function() {
        let list = this.props.productList.map(function(item) {
            return ( 
            	<h1> {item.title} </h1>
            )
        });
        return (
        	<div>
	        	{list}
	        </div>
        	)
    }
});

module.exports = Main;
