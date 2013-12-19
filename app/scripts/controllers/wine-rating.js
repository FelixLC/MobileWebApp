'use strict';

angular.module('vinifyApp')
  .controller('WineRatingCtrl', function ($window, $http, $scope, $location, VinibarWines) {
    $scope.B=[];
    $scope.B[3]=true;
    $scope.B[3]="";

    $scope.PostComment = function(){


        var dataset = 'wine=' + $scope.BOTTLES[$scope.id].wine.id
                      + '&rating=' + $scope.B[1]
                      + '&comment=' + $scope.B[2]
                      + '&get_more=' + $scope.B[3];
          
        var request = $http({
                              url: '/rate/',
                              method: "POST",
                              data: dataset,
                              headers: {
                                       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                              }
                      })
                      .success(function(data, status, headers, config) {
                        VinibarWines.updateWines(
                          function(cda){
                            $location.path('/rated');
                        }); 
                      })
                      .error(function(data, status, headers, config){
                          alert('Merci de Mettre une note au vin grace à la barre de notation');
                        });

        return request;
        }    
  });