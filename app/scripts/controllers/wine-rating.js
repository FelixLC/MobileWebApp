'use strict';

angular.module('vinifyApp')
  .controller('WineRatingCtrl', function ($http, $scope) {
    $scope.B=[];
    $scope.B[2]=true;

    


    $scope.PostComment = function(){

        var dataset = "wine=" + $scope.B[0]
                      + "&rating=" + $scope.B[1]
                      + "&comment=" + $scope.B[2]
                      + "&get_more=" + $scope.B[3];
          
        var request = $http({
                              url: '/rate/',
                              method: "POST",
                              data: dataset,
                              headers: {
                                       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                              }
                      });
        return request;
        }    
  });