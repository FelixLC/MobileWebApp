'use strict';

angular.module('vinifyApp')
  .controller('WineRatingCtrl', function ($scope) {
      var value = $scope.value;
      $scope.rate = 4;
      $scope.max = 5;
      $scope.isReadonly = false;

      $scope.description = function() {

        if (value==1)
            {
            $scope.overStar = "Je n'ai pas aimé";
            }
          else if (value==2)
            {
            $scope.overStar = "Pas mal";
            }
          else if (value==3)
            {
            $scope.overStar="Bon";
            }
          else if (value==4)
            {
            $scope.overStar="Très Bon";
            }
          else if (value==5)
            {
            $scope.overStar="Excellent";
            }
      };


    //   $scope.hoveringOver = function(value) {

    //     if (value==1)
    //         {
    //         $scope.overStar = "Je n'ai pas aimé";
    //         }
    //       else if (value==2)
    //         {
    //         $scope.overStar = "Pas mal";
    //         }
    //       else if (value==3)
    //         {
    //         $scope.overStar="Bon";
    //         }
    //       else if (value==4)
    //         {
    //         $scope.overStar="Très Bon";
    //         }
    //       else if (value==5)
    //         {
    //         $scope.overStar="Excellent";
    //         }
    //   };

    //   $scope.ratingStates = [
    //     {stateOn: 'icon-ok-sign', stateOff: 'icon-ok-circle'},
    //     {stateOn: 'icon-star', stateOff: 'icon-star-empty'},
    //     {stateOn: 'icon-heart', stateOff: 'icon-ban-circle'},
    //     {stateOn: 'icon-heart'},
    //     {stateOff: 'icon-off'}
    //   ];

    // $scope.selected = undefined;
    // $scope.states = ['Sucré', 'Acide', 'Tannique'];
  });