'use strict';

angular.module('vinifyApp')
	.controller('RatedWinesCtrl', function($http, $scope, VinibarWines){
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
