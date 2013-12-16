'use strict';

angular.module('vinifyApp')
  .controller('WineRatingCtrl', function ($scope) {
    $scope.B=[];
    $scope.PostComment = function(){
          var dataset = "rating=" + $scope.B[0]
                      + "&comment=" + $scope.B[1];

        var request = $http({
                              url: '/ratewines/',
                              method: "POST",
                              data: dataset,
                              headers: {
                                       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                              }
                      });
        return request;
        }    
  });