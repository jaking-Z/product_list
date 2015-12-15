'use strict'
var serve = require('koa-static');
var views = require('co-views');
var koa = require('koa');
var path = require('path');
var app = koa();
global.navigator = {userAgent:''};//material-ui 使用


require('node-jsx').install();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var render = views(__dirname + '/views', {
	map: {html: 'ejs'}
});

app.use(serve(path.join(__dirname, 'public')));

var productList = require('./public/json/product_list').zh_cn;
console.log(productList);
app.use(function *(next){
	navigator.userAgent = this.header['user-agent'];
	this.body = yield render('index', {root: ReactDOMServer.renderToString(React.createElement(require('./src/main'),{productList: productList}))});
})

if (!module.parent) {
	app.listen(3000);
	console.log('listening on port 3000');
};

module.exports = app;