'use strict';

/**
 * @ngdoc function
 * @name m4WebDevApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the m4WebDevApp
 */
angular.module('m4WebDevApp')
  .controller('MainCtrl', function($scope, $document){
      $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 1000).then(function() {
          console && console.log('You just scrolled to the top!');
        });
      }
      var section3 = angular.element(document.getElementById('section-3'));
      $scope.toSection3 = function() {
        $document.scrollToElementAnimated(section3);
      }
    $scope.aboutView = "views/about.html";
    $scope.contactView = "views/contact.html";
    }
  )
  .value('duScrollOffset', 50)
  .value('duScrollBottomSpy', true);
