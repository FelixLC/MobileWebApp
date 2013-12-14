'use strict';

angular.module('vinifyApp')
  // .factory('WinesVinibar',function($resource){
  //   return $resource('http://devinify1.herokuapp.com/wines/');    
  //   })
  .controller('GetWinesVinibarCtrl', function($scope, VinibarWines){
    // $scope.WINES = WinesVinibar.query();
    // $scope.mytitle = 'Vinify';
    VinibarWines.getWines(
      // Success
      function(cda){
        $scope.WINES=cda;
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
        $scope.WINES=cda;
      }, 
    // Failure
      function(error){
        console.log(error);
      });
	})
  .factory('VinibarWines', function($resource){
    return {
      wines: null,
      getWines: function(success, failure) {
        var that = this;
        if (that.wines) {
          success(that.wines);
        }
        else {
          $resource('http://devinify1.herokuapp.com/vinibarwines/').query(
            function(abc){
              that.wines = abc;
              success(that.wines);
            }, 
            failure
            );
        }
      }
    }
  });