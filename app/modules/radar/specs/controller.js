'use strict';

describe('radar: controller', function(){
  var $scope;
  var expectedTechniques = 'my techniques list';

  beforeEach(module('radar'));

  beforeEach(inject(function($controller, $rootScope){

    $scope = $rootScope.$new();
    $controller('RadarCtrl', {
      $scope: $scope,
      techniques: expectedTechniques
    });
  }));

  describe('Techniques', function(){
    it('should recover the techniques from the model and put them in $scope.radar', function(){
      expect($scope.radar['techniques']).toBe(expectedTechniques);
    });
  })

  describe('Resolve', function(){
    it('should', inject(function($route, $httpBackend, techniquesModel, $rootScope){

      var expectedTechniques = 'techniques';
      var returnedTechniques;
      $httpBackend.whenGET('http://localhost:3000/techniques')
      .respond(expectedTechniques);

      $httpBackend.whenGET('app/modules/radar/views/radar.html')
      .respond('');

      $route.routes['/'].resolve.techniques(techniquesModel)
      .then(function(techniques){
        returnedTechniques = techniques;
      });

      // $rootScope.$digest();
      $httpBackend.flush();
      expect(returnedTechniques).toEqual(expectedTechniques);
    }));
  });

});
