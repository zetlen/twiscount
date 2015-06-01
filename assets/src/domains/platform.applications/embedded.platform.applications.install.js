/**
 * Implementation for embedded.platform.applications.install
 * This function will receive the following context object:

{
  "exec": {
    "saveInstallationState": {
      "parameters": [
        {
          "type": "object"
        }
      ]
    }
  },
  "get": {
    "applicationKey": {
      "parameters": [],
      "return": {
        "type": "string"
      }
    },
    "exports": {
      "parameters": [],
      "return": {
        "type": "object"
      }
    },
    "installationState": {
      "parameters": [],
      "return": {
        "type": "object"
      }
    },
    "nameSpace": {
      "parameters": [],
      "return": {
        "type": "string"
      }
    }
  }
}

 */

module.exports = function(context, callback) {
    var extensionInstaller = require('mozu-extension-helpers/installers/extensions').installer();
    extensionInstaller.enableExtensions(context)
      .then(function() {
          callback();
      })
      .catch(function(e) {
        callback(e);
      });
};