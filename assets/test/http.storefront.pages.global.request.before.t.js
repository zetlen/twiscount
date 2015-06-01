'use strict';

var XDSimulator = require('mozuxd-simulator');
var createContext = XDSimulator.calvinball;
var simulate = XDSimulator.simulate;
var assert = XDSimulator.assert;
var fixtures = XDSimulator.fixtures;

xdescribe('locavore, http.storefront.pages.global.request.before', function () {

  var action;

  before(function () {
    action = require('../src/domains/storefront/http.storefront.pages.global.request.before');
  });
  

  it('runs successfully', function(done) {

     var context = {
      
      type: 'mozu.actions.context.http',
      
      get: {
          
      },
      exec: {
          
      }
    };

    var callback = function() {
      assert.ok(true, "Callback was called");
      // more assertions
      done();
    };

    assert.doesNotThrow(simulate('http.storefront.pages.global.request.before', action, context, callback));
  });
});
