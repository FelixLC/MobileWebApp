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
				$scope.B = [];
				$scope.C = [];
				$scope.D = [];
				$scope.actionlist = ['PostVinibar', 'PostRefill', 'PostBottle', 'PopulateWines'];
				$scope.winenumber = ['wine1', 'wine2', 'wine3', 'wine4', 'wine5', 'wine6', 'wine7', 'wine8', 'wine9'];
				$scope.winerefillnumber = ['wine1', 'wine2', 'wine3'];
				$scope.winebottlenumber = ['wine1'];
				$scope.temps = ['6 - 8', '7 - 10', '10 - 13', '13', '15 - 18'];

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

				$scope.PostRefill = function(){
					var dataset = 'username=' + $scope.B[0]
											+ '&wine1=' + $scope.B[1]
											+ '&wine2=' + $scope.B[2]
											+ '&wine3=' + $scope.B[3];

					var request = $http({
													url: '/createrefill/',
													method: 'POST',
													data: dataset,
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
													}
												});
				return request;
				};

				$scope.PostBottle = function(){
					var dataset = 'username=' + $scope.C[0]
											+ '&wine1=' + $scope.C[1];

					var request = $http({
													url: '/createbottle/',
													method: 'POST',
													data: dataset,
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
													}
												});
				return request;
				};

				$scope.PopulateWines = function(){
					var dataset = 'wine=' + $scope.D[0]
											+ '&description=' + $scope.D[1]
											+ '&degustation=' + $scope.D[2]
											+ '&temp=' + $scope.D[3]
											+ '&caraf=' + $scope.D[4];

					var request = $http({
													url: '/populatewines/',
													method: 'POST',
													data: dataset,
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
													}
												});
				return request;
				};

				

			});