'use strict';

angular.module('vinifyApp', ['ionic', 'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngTouch',
  'ui.bootstrap.transition',
  'ui.bootstrap.modal',
  'security'
])

  .run(['security', function(security) {
  // Get the current user when the application starts
  // (in case they are still logged in from a previous session)
  security.requestCurrentUser();
}])

  .config(function ($compileProvider){
  // Needed for routing to work
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/vinibar.html',
        controller: 'GetWinesVinibarCtrl'
      })
      .when('/vinibar', {
        templateUrl: 'views/vinibar.html',
        controller: 'GetWinesVinibarCtrl'
      })
      .when('/vinibar/wines/:id', {
        templateUrl: 'views/wine-info.html',
        controller: 'WineInfoCtrl'
      })
      .when('/vinibar/rating/:id', {
        templateUrl: 'views/wine-rating.html',
        controller: 'WineInfoCtrl'
      })
      .when('/vinibar/rated/:id', {
        templateUrl: 'views/wine-rated-info.html',
        controller: 'RatedWinesInfoCtrl'
      })
      .when('/rated', {
        templateUrl: 'views/wine-rated.html',
        controller: 'RatedWinesCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/login', {
        templateUrl: 'scripts/security/login/form.tpl.html',
        controller: 'LoginFormController'
      })
      .when('/petrus82pommard72', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.controller('ModalCtrl', function($http, $scope, Modal, security, VinibarWines, $route, $location) {
  $scope.mytitle='Vinify'
  $scope.$on('$routeChangeSuccess', function() {
    var path = $location.path();
    console.log(path);
    $scope.pathisnotlogin = true;
    if(path === '/login') {
       $scope.pathisnotlogin = false;
    } else {
       $scope.pathisnotlogin = true;
    }
  });

  $scope.$watch(function() {
        return security.currentUser;
      }, function(currentUser) {
        $scope.currentUser = currentUser;
      });
  $scope.$watch(function() {
        return security.currentUserData;
      }, function(currentUserData) {
        $scope.currentUserData = currentUserData;
      });

  // Load the modal from the given template URL
  Modal.fromTemplateUrl('views/modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
  });

  $scope.rightButtons = [
    { 
      type: 'button-positive',
      content: '<i class="fa fa-sign-out" id="signout"></i>',
      tap: function() {
        $scope.openModal();
      }
    }
  ];

  $scope.user= {};
  $scope.changepwd = false;

  $scope.changepassword = function(){


        var dataset = 'current_password' + $scope.user.mdp1
                      + '&new_password=' + $scope.user.mdp2;
          
        var request = $http({
                              url: '/changepassword/',
                              method: "POST",
                              data: dataset,
                              headers: {
                                       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                              }
                      })
                      .success(function(data, status, headers, config) {
                            $scope.modal.hide();
                            security.logout('/login');
                      });

        return request;
        };


  $scope.logout = function() {
    VinibarWines.wines = null;
    VinibarWines.ratedwines= null;
    $scope.modal.hide();
    security.logout('/login');
    };
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
});
