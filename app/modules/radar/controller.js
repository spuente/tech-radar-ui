'use strict';

angular.module('radar')
.controller('RadarCtrl', function($scope, techniquesModel){

  $scope.radar = {
    techniques: techniquesModel.get()
  }
});
