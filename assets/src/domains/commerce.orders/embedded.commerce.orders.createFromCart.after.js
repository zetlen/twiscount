/**
 * Implementation for embedded.commerce.orders.createFromCart.after
 * This function will receive the following context object:

{
  "exec": {
    "doSomething": {
      "parameters": [
        {
          "type": "api.commerce.order"
        }
      ],
      "return": {
        "type": "undefined"
      }
    }
  },
  "get": {
    "order": {
      "type": "api.commerce.order"
    }
  }
}

 */

module.exports = function(context, callback) {
  callback();
};