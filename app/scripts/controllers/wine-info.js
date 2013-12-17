'use strict';

angular.module('vinifyApp')
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
