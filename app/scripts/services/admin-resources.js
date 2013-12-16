'use strict';

angular.module('vinifyApp')
  // .factory('WinesVinibar',function($resource){
  //   return $resource('http://devinify1.herokuapp.com/wines/');    
  //   })
  .factory('VinibarUsers', function($resource){
    return {
      users: null,
      allwines: null,
      getUsers: function(success, failure) {
        var that = this;
        if (that.users) {
          success(that.users);
        }
        else {
          $resource('/users/').query(
            function(abc){
              that.users = abc;
              success(that.users);
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
          $resource('/wines/').query(
            function(abc){
              that.allwines = abc;
              success(that.allwines);
            }, 
            failure
            );
        }
      }
    }
  });