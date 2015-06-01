module.exports = {
  
  'embedded.platform.applications.install': {
      actionName:'embedded.platform.applications.install',
      customFunction: require('./domains/platform.applications/embedded.platform.applications.install')
   },
  
  'http.storefront.pages.global.request.after': {
      actionName:'http.storefront.pages.global.request.after',
      customFunction: require('./domains/storefront/http.storefront.pages.global.request.after')
   }
  
};