'use strict';

angular.module('vinifyApp')
		.controller('GetWinesVinibarCtrl', function($http, $scope, VinibarWines){
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
