'use strict';

/**
 * @ngdoc function
 * @name m4WebDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the m4WebDevApp
 */
angular.module('m4WebDevApp')
  .controller('MainCtrl', function ($scope) {

  })
  .controller('myCtrl', function($scope, $document) {
    var top = 400;
    var duration = 2000; //milliseconds

    //Scroll to the exact position
    $document.scrollTop(top, duration).then(function() {
      console && console.log('You just scrolled to the top!');
    });

    var offset = 30; //pixels; adjust for floating menu, context etc
    //Scroll to #some-id with 30 px "padding"
    //Note: Use this in a directive, not with document.getElementById
    var someElement = angular.element(document.getElementById('some-id'));
    $document.scrollToElement(someElement, offset, duration);
  }
);
