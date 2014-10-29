'use strict';

angular.module('model', [])
.factory('model', function($http){

  return function(name) {
      return {
          get: function() {
            return $http.get('http://localhost:3000/' + name)
            .then(function(response) {
              return response.data;
            });
          },
          post: function(element) {
            return $http.post('http://localhost:3000/' + name, element)
            .then(function(response) {
              return response;
            });
          }
      }
  }
});
