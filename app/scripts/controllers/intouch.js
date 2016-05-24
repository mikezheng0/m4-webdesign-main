'use strict';
//thtyhrh
/**
 * @ngdoc function
 * @name m4WebDevApp.controller:IntouchCtrl
 * @description
 * # Keep In touch ctrl
 * Controller of the m4WebDevApp
 */
angular.module('m4WebDevApp')
  .controller('IntouchCtrl', function($scope, $document){
      $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 5000).then(function() {
          console && console.log('You just scrolled to the top!');
        });
      }
    });
