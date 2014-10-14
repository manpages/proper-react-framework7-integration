"use strict";

require('react');
require('./js/framework7.js');
require('./css/framework7.css');
require('./css/ionicons.css');

var c = require('./crypto.js');
console.log(JSON.stringify(c));
console.log( c.sha256("password") );
