var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express()

app.use(serveStatic(path.join(__dirname, 'public'), {'index': ['index.html']}))

app.listen(process.env.PORT || 3000);