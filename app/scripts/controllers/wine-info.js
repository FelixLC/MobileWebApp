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

			$scope.carafagewhite = function(wine){
				var result = false;
				if (wine.carafage && wine couleur === 'Blanc')
					result = true;
				return result;
			};

			$scope.carafagelightred = function(wine){
				var result = false;
				if (!wine.carafage && wine couleur === 'Rouge')
					result = true;
				return result;
			};

			$scope.carafagestrongred = function(wine){
				var result = false;
				if (wine.carafage && wine couleur === 'Rouge')
					result = true;
				return result;
			};
		});
