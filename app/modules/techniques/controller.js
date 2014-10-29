'use strict';

angular.module('techniques')
.controller('TechniquesCtrl', function($scope, techniques){

  $scope.techniques = techniques;
})
.config(function($routeProvider) {
  $routeProvider
  .when('/techniques', {
    templateUrl: 'app/modules/techniques/views/techniques.html',
    controller: 'TechniquesCtrl',
    resolve: {
      techniques: function(model){
        return model.get('techniques')
      }
    }
  })
});
