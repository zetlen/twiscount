'use strict';

var XDSimulator = require('mozuxd-simulator');
var simulate = XDSimulator.simulate;
var assert = XDSimulator.assert;
var fixtures = XDSimulator.fixtures;

xdescribe('locavore, embedded.platform.applications.install', function () {

  var action;

  before(function () {
    action = require('../src/domains/platform.applications/embedded.platform.applications.install');
  });
  

  it('runs successfully', function(done) {

     var context = {
      
      get: {
          
             applicationKey: function() { return fixtures.get("string") }
          ,
             exports: function() { return fixtures.get("object") }
          ,
             installationState: function() { return fixtures.get("object") }
          ,
             nameSpace: function() { return fixtures.get("string") }
          
      },
      exec: {
          
            saveInstallationState: function() {
              assert.equal(arguments.length, 1, "Expected saveInstallationState function to receive 1 parameters.");
              // other assertions
            }
          
      }
    };

    var callback = function() {
      assert.ok(true, "Callback was called");
      // more assertions
      done();
    };

    assert.doesNotThrow(simulate('embedded.platform.applications.install', action, context, callback));
  });
});
