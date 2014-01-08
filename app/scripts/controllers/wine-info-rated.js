'use strict';

angular.module('vinifyApp')
  .controller("RatedWinesInfoCtrl", function (VinibarWines, $scope, $routeParams) {
			$scope.id = $routeParams.id -1;
			VinibarWines.getRatedWines(
				// Success
				function(cda){
					$scope.RBOTTLES=cda;
				}, 
				// Failure
					function(error){
						console.log(error);
			});
		});
