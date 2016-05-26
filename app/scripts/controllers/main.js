'use strict';

/**
 * @ngdoc function
 * @name m4WebDevApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the m4WebDevApp
 */
angular.module('m4WebDevApp')
  .controller('MainCtrl', function($scope, $document, $http, serviceData){
      $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 1000).then(function() {
          console && console.log('You just scrolled to the top!');
        });
      };
      $scope.services = serviceData.getServices();
      var section3 = angular.element(document.getElementById('section-3'));
      $scope.toSection3 = function() {
        $document.scrollToElementAnimated(section3);
      };
    $scope.aboutView = "views/about.html";
    $scope.intouchView = "views/intouch.html";
    $scope.contactView = "views/contact.html";
    $scope.servicesView = "views/services.html";

  })
  .value('duScrollOffset', 50)
  .value('duScrollBottomSpy', true);
