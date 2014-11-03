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
      techniques: function(model) {
        return model('techniques').get()
      }
    }
  })
  .when('/techniques/new', {
    templateUrl: 'app/modules/techniques/views/techniques-form.html',
    controller: '',
    resolve: {
      technique: function(model, $route){
        model('techniques').post(
          {
            "technique":
            {
              "name":"Registro 1",
              "description": "Description 1",
              "status": "Hold"
            }
          }
        )
      }
    }
  })
  .when('/techniques/edit/:id', {
    templateUrl: 'app/modules/techniques/views/techniques-add.html',
    controller: '',
    resolve: {
      technique: function(model, $route){
        model('techniques').get(2)
        return {
        };
      }
    }
  });
});
