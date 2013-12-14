.factory('basketService', function (security, BasketResource, clientLocale){
  return {
    basket: null,
    paymentCallbackArray : [],

    getBasket: function(success, error) {
      var that = this;
      if (that.basket) {
        success(that.basket); 
      }
      else {
        security.requestCurrentUser().then(function(cu) {
          if (cu.active_basket) { 
            // Take basket from user
            BasketResource.get({id: BasketResource.uri2uuid(cu.active_basket)}, 
              function(b) {
                that.basket = b;
                success(that.basket);  
              },
              function(e) { /* handle error */ }
            );
          }
          else {
            clientLocale.getCountry().then(function (country) {
              var new_basket = new BasketResource();
              new_basket.user = cu.resource_uri;
              new_basket.country = country;
              new_basket.$save(function(b) {
                cu.active_basket = b;
                cu.$update(function(user){
                  that.basket = b;
                  success(that.basket);
                }, error);
              });
            });
          }
        }, error);
      }
    },

    payment: function(){
      angular.forEach(this.paymentCallbackArray, function(cb){
        cb();
      });
    },

    onPayment: function(cb) {
      this.paymentCallbackArray.push(cb);

      return this.paymentCallbackArray.length - 1;
    },

    removeOnPayment: function(index) {
      this.paymentCallbackArray.splice(index, 1);
    }
    
  };
})