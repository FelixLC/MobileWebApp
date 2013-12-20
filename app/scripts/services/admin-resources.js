'use strict';

angular.module('vinifyApp')
  // .factory('WinesVinibar',function($resource){
  //   return $resource('http://devinify1.herokuapp.com/wines/');    
  //   })
  .factory('VinibarUsers', function($resource){
    return {
      users: null,
      allwines: null,
      overview: null,
      getUsers: function(success, failure) {
        var that = this;
        if (that.users) {
          success(that.users);
        }
        else {
          $resource('/djangorestadminusers/').query(
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
          $resource('/djangorestadminwines/').query(
            function(abc){
              that.allwines = abc;
              success(that.allwines);
            }, 
            failure
            );
        }
      },
      getClientsOverview: function(success, failure) {
        var that = this;
        if (that.overview) {
          success(that.overview);
        }
        else {
          $resource('/clientsoverview/').query(
            function(abc){
              that.overview = abc;
              success(that.overview);
            }, 
            failure
            );
        }
      }
    }
  });