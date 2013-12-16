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

  .run(['security', '$rootScope', function(security, $rootScope) {
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
      .when('/rated', {
        templateUrl: 'views/wine-rated.html',
        controller: 'GetWinesVinibarCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/login', {
        templateUrl: 'scripts/security/login/form.tpl.html',
        controller: 'LoginFormController'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.controller('ModalCtrl', function($scope, Modal, security) {
  $scope.whoisit = security.currentUser;
  $scope.whoami = security.currentUserData;


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
      content: '<i class="icon ion-navicon"></i>',
      tap: function() {
        $scope.openModal();
      }
    }
  ];
  // Test data
  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' }
  ];

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
});
