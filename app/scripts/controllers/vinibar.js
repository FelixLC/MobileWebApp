'use strict';

angular.module('vinifyApp')
  // .factory('WinesVinibar',function($resource){
  //   return $resource('http://devinify1.herokuapp.com/wines/');    
  //   })
      .controller('GetWinesVinibarCtrl', function($http, $scope, VinibarWines){
        // $scope.WINES = WinesVinibar.query();
        // $scope.mytitle = 'Vinify';
        VinibarWines.getWines(
          // Success
          function(cda){
            $scope.BOTTLES=cda;
          }, 
        // Failure
          function(error){
            console.log(error);
          });
      })
    .controller("WineInfoCtrl", function (VinibarWines, $scope, $routeParams) {
      $scope.id = $routeParams.id -1;
      VinibarWines.getWines(
          // Success
          function(cda){
            $scope.BOTTLES=cda;
          }, 
        // Failure
          function(error){
            console.log(error);
      });
    });
