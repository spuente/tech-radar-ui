'use strict';

angular.module('radar')
.controller('RadarCtrl', function($scope, techniques, languages) {

  $scope.radar = {
    techniques: techniques,
    languages: languages
  };
})
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/modules/radar/views/radar.html',
    controller: 'RadarCtrl',
    resolve: {
      techniques: function(model) {
        return model('techniques').get()
      },
      languages: function(model) {
        return model('languages').get()
      }
    }
  })
});
