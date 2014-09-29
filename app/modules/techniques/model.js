'use strict';

angular.module('techniques')
.factory('techniquesModel', function(){
  return {
    get: function(){
      return [
        {
          name: 'Comply with OWASP Top 10',
          status: 'Adopt'
        },
        {
          name: 'TDD',
          status: 'Adopt'
        },
        {
          name: 'Waterfall model',
          status: 'Hold'
        }
      ];
    }
  };
});
