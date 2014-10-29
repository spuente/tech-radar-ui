'use strict';

angular.module('model', [])
.factory('model', function($http){
  return {
    get: function(name) {
      return $http.get('http://localhost:3000/' + name)
      .then(function(response) {
        return response.data;
      });
    },
    post: function() {
      return $http.post('http://localhost:3000/techniques',
      '{name:abc, description:desc, status:hold}')
      .then(function(code) {
        return code;
      });
    }
  };
});
