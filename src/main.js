'use strict'

var React = require('react');
var Master = require('./components/master');

var Main = React.createClass({
    render: function() {
        
        return (
        	<Master>
                <div>hello world</div>
            </Master>
        	)
    }
});

module.exports = Main;
