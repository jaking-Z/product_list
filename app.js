'use strict'
var serve = require('koa-static');
var views = require('co-views');
var koa = require('koa');
var path = require('path');
var app = koa();


require('node-jsx').install();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var render = views(__dirname + '/views', {
	map: {html: 'ejs'}
});

app.use(serve(path.join(__dirname, 'public')));

var list = [{name: 'product'}];
app.use(function *(next){
	this.body = yield render('index', {root: ReactDOMServer.renderToString(React.createElement(require('./c/main'),{product: list}))});
})

if (!module.parent) {
	app.listen(3000);
	console.log('listening on port 3000');
};

module.exports = app;