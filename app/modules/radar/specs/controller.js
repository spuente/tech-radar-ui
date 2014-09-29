'use strict';

describe('radar: controller', function(){
  var $scope;
  var expectedTechniques = 'my techniques list';

  beforeEach(module('radar'));

  beforeEach(inject(function($controller, $rootScope, techniquesModel){

    techniquesModel.get = function(){
      return expectedTechniques;
    }

    $scope = $rootScope.$new();
    $controller('RadarCtrl', {
      $scope: $scope
    });
  }));

  it('should run', function(){
    expect(true).toBe(true);
  });

  describe('Techniques', function(){
    it('should recover the techniques from the model and put them in $scope.radar', function(){
      expect($scope.radar['techniques']).toBe(expectedTechniques);
    });
  })
});
