/**
 * Created by mike on 3/26/16.
 */
angular.module('m4WebDevApp')
  .controller('ContactCtrl', function($scope, $http){
    $scope.submitForm = function() {
      $http.post('/', {name: $scope.user.name, organization:$scope.user.organization, email:$scope.user.email, phone:$scope.user.phone, message:$scope.user.message}).success(function (data) {
        console.log(data);
      });
    };
  });
