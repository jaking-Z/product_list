'use strict'

var React = require('react');
var Master = require('./components/master');

console.log(Master);
var Main = React.createClass({
    render: function() {
        
        return (
        	<Master>
                'hello world'
            </Master>
        	)
    }
});

module.exports = Main;
