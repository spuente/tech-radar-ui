'use strict';

angular.module('languages')
.controller('LanguagesCtrl', function($scope, languages){

  $scope.languages = languages;
})
.config(function($routeProvider) {
  $routeProvider
  .when('/languages', {
    templateUrl: 'app/modules/languages/views/languages.html',
    controller: 'LanguagesCtrl',
    resolve: {
      languages: function(model) {
        return model('languages').get()
      }
    }
  })
  .when('/languages/new', {
    templateUrl: 'app/modules/languages/views/languages-form.html'
  });
});
