'use strict';

angular.module('vinifyApp')
			.controller('AdminController', function($filter, $http, $scope, VinibarUsers, security){
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
				VinibarUsers.getClientsOverview(
					// Success
					function(cda){
						$scope.clientsoverview=cda;
					},
					// Failure
					function(error){
						console.log(error);
					});
				VinibarUsers.getWineRatings(
					// Success
					function(cda){
						$scope.wineratings=cda;
					},
					// Failure
					function(error){
						console.log(error);
					});
				VinibarUsers.getUserRatings(
					// Success
					function(cda){
						$scope.userratings=cda;
					},
					// Failure
					function(error){
						console.log(error);
					});

				$scope.A = [];
				$scope.B = [];
				$scope.C = [];
				$scope.D = [];
				$scope.actionlist = ['PostVinibar', 'PostRefill', 'PostBottle', 'PopulateWines', 'ClientsOverview', 'WineRatings', 'UserRatings'];
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
													url: '/populatewine/',
													method: 'POST',
													data: dataset,
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
													}
												});
				return request;
				};

				$scope.GetUserRatings = function(){
					var dataset = 'username=' + $scope.theuser;

					var request = $http({
													url: '/userratings/',
													method: 'POST',
													data: dataset,
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
													}
												});
				return request;
				};

				$scope.GetWineRatings = function(){
					var dataset = 'wine=' + $scope.thewine;

					var request = $http({
													url: '/wineratings/',
													method: 'POST',
													data: dataset,
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
													}
												});
				return request;
				};

				

			//TableController
				$scope.clientoverview = [{"rating_count": 0, "bottle_count": 9, "username": "marchandise@yahoo.fr", "id": 32}, {"rating_count": 0, "bottle_count": 9, "username": "matthieu.cord@gmail.com", "id": 33}, {"rating_count": 0, "bottle_count": 9, "username": "gatien.bon@polytechnique.edu", "id": 34}, {"rating_count": 0, "bottle_count": 9, "username": "eschocron@gmail.com", "id": 35}, {"rating_count": 0, "bottle_count": 9, "username": "rubib@hotmail.fr", "id": 36}, {"rating_count": 0, "bottle_count": 9, "username": "fbertozzi@aneo.fr", "id": 37}, {"rating_count": 5, "bottle_count": 4, "username": "felix@vinify.co", "id": 2}, {"rating_count": 0, "bottle_count": 0, "username": "samuel@sampaccoud.com", "id": 38}, {"rating_count": 0, "bottle_count": 0, "username": "mathieu2424@hotmail.fr", "id": 39}, {"rating_count": 0, "bottle_count": 0, "username": "ppdebouville@gmail.com", "id": 40}, {"rating_count": 0, "bottle_count": 0, "username": "underbararesa@gmail.com", "id": 41}, {"rating_count": 0, "bottle_count": 9, "username": "annevb@hotmail.fr", "id": 11}, {"rating_count": 0, "bottle_count": 0, "username": "mabouquin@gmail.com", "id": 5}, {"rating_count": 0, "bottle_count": 0, "username": "emmanuel.legrand1@sfr.fr", "id": 6}, {"rating_count": 0, "bottle_count": 9, "username": "camuset.courcelles@orange.fr", "id": 7}, {"rating_count": 0, "bottle_count": 0, "username": "pierreedouardvidal@gmail.com", "id": 8}, {"rating_count": 0, "bottle_count": 0, "username": "scotty_schneider@yahoo.fr", "id": 9}, {"rating_count": 0, "bottle_count": 0, "username": "sylvie.gerard1000@free.fr", "id": 10}, {"rating_count": 0, "bottle_count": 0, "username": "jcb.mathieu@gmail.com", "id": 13}, {"rating_count": 0, "bottle_count": 0, "username": "frroyer@hotmail.com", "id": 14}, {"rating_count": 0, "bottle_count": 0, "username": "arthur.auxenfants@hotmail.fr", "id": 15}, {"rating_count": 0, "bottle_count": 0, "username": "gviennet@aastra.com", "id": 17}, {"rating_count": 0, "bottle_count": 9, "username": "aurelien.cord@gmail.com", "id": 18}, {"rating_count": 0, "bottle_count": 0, "username": "guillaume.debaudreuil@gmail.com", "id": 19}, {"rating_count": 0, "bottle_count": 0, "username": "marksoubiran@hotmail.com", "id": 20}, {"rating_count": 0, "bottle_count": 0, "username": "patlyproductions@hotmail.com", "id": 21}, {"rating_count": 0, "bottle_count": 9, "username": "nplanty@gmail.com", "id": 22}, {"rating_count": 0, "bottle_count": 0, "username": "dlechevallier@verspieren.com", "id": 23}, {"rating_count": 0, "bottle_count": 0, "username": "quentin.legoc@edhec.com", "id": 26}, {"rating_count": 0, "bottle_count": 9, "username": "tdewaziers@gmail.com", "id": 27}, {"rating_count": 0, "bottle_count": 0, "username": "potel.laurent@gmail.com", "id": 28}, {"rating_count": 0, "bottle_count": 9, "username": "pierre.ichoua@gmail.com", "id": 29}, {"rating_count": 0, "bottle_count": 0, "username": "remy.fabrice@neuf.fr", "id": 30}, {"rating_count": 0, "bottle_count": 0, "username": "sandrine.schulz@gmail.com", "id": 31}, {"rating_count": 0, "bottle_count": 0, "username": "gillesmeese@gmail.com", "id": 25}, {"rating_count": 0, "bottle_count": 9, "username": "yves.lajouanie@gmail.com", "id": 12}, {"rating_count": 9, "bottle_count": 9, "username": "benjamin@vinify.co", "id": 1}, {"rating_count": 0, "bottle_count": 9, "username": "philippeplaton@gmail.com", "id": 24}, {"rating_count": 0, "bottle_count": 0, "username": "antoine@vinify.co", "id": 3}, {"rating_count": 1, "bottle_count": 8, "username": "michael@vinify.co", "id": 4}, {"rating_count": 0, "bottle_count": 9, "username": "laurentcadoret@free.fr", "id": 16}];


			});