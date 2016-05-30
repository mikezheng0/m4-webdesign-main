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
    'ngMaterial',
    'ngMessages',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .backgroundPalette('yellow');
    $mdThemingProvider.theme('default').foregroundPalette[4] = "white";
    $mdThemingProvider.theme('default').foregroundPalette[3] = "white";

  });
