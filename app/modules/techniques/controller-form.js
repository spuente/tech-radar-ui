'use strict';

angular.module('techniques')
.controller('TechniquesFormCtrl', function($scope, model){

  $scope.techniques = {};
  $scope.alerts = [];

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
    ).
    success(function() {
      $scope.addAlert('Technique created successfully!', 'success');
    }).
    error(function() {
      $scope.addAlert('Some fields contain errors.', 'danger');
    });

    $scope.techniques = {};
  };

  $scope.addAlert = function(content, type) {
    $scope.alerts.push({
      content: content,
      type: type
    })
  }

  $scope.removeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});
