'use strict';

angular.module('techniques')
.factory('techniquesModel', function($http, $q){
  return {
    get: function() {
      return $http.get('http://localhost:3000/techniques')
      .then(function(response){
        return response.data;
      });
    }
  };
});
