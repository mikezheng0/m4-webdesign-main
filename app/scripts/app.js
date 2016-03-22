'use strict';

/**
 * @ngdoc overview
 * @name m4WebDevApp
 * @description
 * # m4WebDevApp
 *
 * Main module of the application.
 */
angular
  .module('m4WebDevApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
