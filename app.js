'use strict'
var serve = require('koa-static');
var views = require('co-views');
var koa = require('koa');
var path = require('path');
var app = koa();


require('node-jsx').install();
var React = require('react');

var reder = views(__dirname + '/views', {
	map: {html: 'ejs'}
});

app.use(serve(path.join(__dirname, 'public')));

var list = [{name: 'product'}];
app.use(fuction *(next){
	this.body = yield reder('test', {root: React.rederToString(React.createElement(require('/c/main'),{product: list}))});
})

if (!module.parent) {
	app.listen(3000);
	console.log('listening on port 3000');
};