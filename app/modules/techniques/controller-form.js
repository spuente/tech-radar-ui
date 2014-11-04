'use strict';

angular.module('techniques')
.controller('TechniquesFormCtrl', function($scope, model){

  $scope.techniques = {

  };

  $scope.save = function() {
    model('techniques').post(
      {
        "technique":
        {
          "name": $scope.techniques.name,
          "description": $scope.techniques.description,
          "status": $scope.techniques.status
        }
      }
    )

    $scope.techniques = {}
  }
});
