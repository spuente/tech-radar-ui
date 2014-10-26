'use strict';

angular.module('languages')
.factory('languagesModel', function($http){
  return {
    get: function() {
      return $http.get('http://localhost:3000/languages')
      .then(function(response){
        return response.data;
      });
    }
  };
});
