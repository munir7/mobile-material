define(function(require) {
  'use strict';

  var module = require('./module');
  require('./config');
  require('./controller');
  require('./states');

  return module;

});
