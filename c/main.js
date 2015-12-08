'use strict'

var React = require('react');


var Main = React.createClass({
    render: function() {
        var list = this.props.productList.map(function(item) {
            return ( 
            	<li>
	            	<span> {item.title} </span>
	                <span> {item.price} </span>
                </li>
            )
        });
        return (
        	<ul>
	        	{list}
	        </ul>
        	)
    }
});

module.exports = Main;
