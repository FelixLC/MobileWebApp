'use strict';

angular.module('vinifyApp')
  // .factory('WinesVinibar',function($resource){
  //   return $resource('http://devinify1.herokuapp.com/wines/');    
  //   })
  .factory('VinibarWines', function($resource){
    return {
      wines: null,
      allwines: null,
      getWines: function(success, failure) {
        var that = this;
        if (that.wines) {
          success(that.wines);
        }
        else {
          $resource('http://devinify1.herokuapp.com/vinibarlist/').query(
            function(abc){
              that.wines = abc;
              success(that.wines);
            }, 
            failure
            );
        }
      },
      getAllWines: function(success, failure) {
        var that = this;
        if (that.allwines) {
          success(that.allwines);
        }
        else {
          $resource('http://devinify1.herokuapp.com/wines/').query(
            function(abc){
              that.wines = abc;
              success(that.allwines);
            }, 
            failure
            );
        }
      }
    }
  });