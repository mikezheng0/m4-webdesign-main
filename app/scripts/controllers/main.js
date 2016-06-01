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
    $scope.teamMembers =[{
      id: 0,
      name: "Matt Lee",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      photo: 'images/mattlee.jpg'
    }, {
      id: 1,
      name: "Matt Martin",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      photo: 'images/mattmartin.jpg'
    }, {
      id: 2,
      name: "Mike Zheng",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    }, {
      id: 3,
      name: "Mahesh Jethva",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      photo: 'images/mahesh.png'
    }]
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
