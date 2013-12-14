'use strict';

angular.module('vinifyApp')
      .controller('AdminController', function($http, $scope, VinibarWines){
      	VinibarWines.getAllWines(
          // Success
          function(cda){
            $scope.WINES=cda;
          }, 
        // Failure
          function(error){
            console.log(error);
          });
      });