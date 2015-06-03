module.exports = {
  
  'embedded.commerce.orders.createFromCart.after': {
      actionName:'embedded.commerce.orders.createFromCart.after',
      customFunction: require('./domains/commerce.orders/embedded.commerce.orders.createFromCart.after')
   },
  
  'embedded.platform.applications.install': {
      actionName:'embedded.platform.applications.install',
      customFunction: require('./domains/platform.applications/embedded.platform.applications.install')
   },
  
  'http.storefront.pages.global.request.after': {
      actionName:'http.storefront.pages.global.request.after',
      customFunction: require('./domains/storefront/http.storefront.pages.global.request.after')
   }
  
};