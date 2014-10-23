'use strict';

angular.module('radar')
.controller('RadarCtrl', function($scope, techniques){

  $scope.radar = {
    techniques: techniques
  }
})
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'app/modules/radar/views/radar.html',
    controller: 'RadarCtrl',
    resolve: {
      techniques: function(techniquesModel){
        return techniquesModel.get()
      }
    }
  })
});
