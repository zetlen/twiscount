/**
 * Implementation for http.storefront.pages.global.request.after
 * This function will receive the following context object:

{
  "type": "mozu.actions.context.http"
}

 */

var url = require('url');
module.exports = function(context, callback) {
  var uri = url.parse(context.request.url);
  context.response.body = uri;
  uri.lol = 'wut';
  uri.hi = 'noa';
  uri.naaah = 'asdasdasasdjhgad';
  callback();
};