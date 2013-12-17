'use strict';

angular.module('vinifyApp')
			.controller('AdminController', function($http, $scope, VinibarUsers){
				VinibarUsers.getAllWines(
					// Success
					function(cda){
						$scope.WINES=cda;
					},
					// Failure
					function(error){
						console.log(error);
					});
				VinibarUsers.getUsers(
					// Success
					function(cda){
						$scope.users=cda;
					},
					// Failure
					function(error){
						console.log(error);
					});

				$scope.A = [];
				$scope.winenumber = ['wine1', 'wine2', 'wine3', 'wine4', 'wine5', 'wine6', 'wine7', 'wine8', 'wine9'];

				$scope.PostWines = function(){
					var dataset = 'username=' + $scope.A[0]
											+ '&wine1=' + $scope.A[1]
											+ '&wine2=' + $scope.A[2]
											+ '&wine3=' + $scope.A[3]
											+ '&wine4=' + $scope.A[4]
											+ '&wine5=' + $scope.A[5]
											+ '&wine6=' + $scope.A[6]
											+ '&wine7=' + $scope.A[7]
											+ '&wine8=' + $scope.A[8]
											+ '&wine9=' + $scope.A[9];

					var request = $http({
													url: '/createvinibar/',
													method: 'POST',
													data: dataset,
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
													}
												});
				return request;
				};
			});