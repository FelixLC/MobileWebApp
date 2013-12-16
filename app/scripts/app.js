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
        templateUrl: 'views/login.html'
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
  });
