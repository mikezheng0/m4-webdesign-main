'use strict';
//thtyhrh
/**
 * @ngdoc function
 * @name m4WebDevApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the m4WebDevApp
 */
angular.module('m4WebDevApp')
  .controller('ServicesCtrl', function($scope, $document, serviceData){
      
      $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 5000).then(function() {
          console && console.log('You just scrolled to the top!');
        });
      }
      var section3 = angular.element(document.getElementById('section-4'));
      $scope.toSection4 = function() {
        $document.scrollToElementAnimated(section4);
      }
    }
  ).value('duScrollOffset', 30);
