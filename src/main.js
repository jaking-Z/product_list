'use strict'

var React = require('react');
var Master = require('./components/master');
var Home = require('./components/pages/home');

var Main = React.createClass({
    render: function() {
        
        return (
        	<Master>
                <Home></Home>
            </Master>
        	)
    }
});

module.exports = Main;
