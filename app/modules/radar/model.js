'use strict';

angular.module('radar')
.factory('model', function($http){
  return {
    get: function(name) {
      return $http.get('http://localhost:3000/' + name)
      .then(function(response){
        return response.data;
      });
    }
  };
});